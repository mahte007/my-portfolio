import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { projects } from "@/data/projects";
import { routing } from "@/i18n/routing";
import CaseStudyView from "@/components/caseStudy/caseStudyView";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.id }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};

  const t = await getTranslations({
    locale,
    namespace: `ProjectsSection.projects.${slug}`,
  });
  const title = `${t(project.titleKey)} | Máté Horváth`;
  const description = t(project.descKey);

  return {
    title,
    description,
    alternates: {
      canonical: `https://horvathmate.dev/${locale}/projects/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://horvathmate.dev/${locale}/projects/${slug}`,
      images: [{ url: project.imageLink }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.imageLink],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.id === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prevProject =
    projects.length > 1
      ? projects[(index - 1 + projects.length) % projects.length]
      : undefined;
  const nextProject =
    projects.length > 1
      ? projects[(index + 1) % projects.length]
      : undefined;

  return (
    <CaseStudyView
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
