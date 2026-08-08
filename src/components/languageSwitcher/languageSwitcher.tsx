import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import * as styles from "./languageSwitcher.css";
import clsx from "clsx";
import { Fragment } from "react";

const languages = ["en", "hu"];

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const segments = pathName.split("/").filter(Boolean);
  const currentCode = segments[0] || "en";

  return (
    <div className={styles.languageSwitcherContainer}>
      {languages.map((code, i) => (
        <Fragment key={code}>
          {i > 0 && <span className={styles.separator}>/</span>}
          <Link
            className={clsx(
              styles.languageLink,
              currentCode === code && styles.activeLanguageLink
            )}
            href="/"
            locale={code}
          >
            {code.toUpperCase()}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
