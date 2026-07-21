import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Let next-intl finish locale redirects (e.g. `/` -> `/en`) before
  // rewriting to the maintenance page, otherwise the locale prefix is lost.
  if (isMaintenanceMode && response.status < 300) {
    const {pathname} = request.nextUrl;
    const isMaintenancePath = routing.locales.some(
      (locale) => pathname === `/${locale}/maintenance`
    );

    if (!isMaintenancePath) {
      const locale =
        routing.locales.find((l) => pathname.startsWith(`/${l}`)) ??
        routing.defaultLocale;
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/maintenance`;
      return NextResponse.rewrite(url);
    }
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};