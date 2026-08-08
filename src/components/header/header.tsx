"use client";

import { Menu, X } from "lucide-react";
import * as styles from "./header.css";
import Image from "next/image";
import github from "/public/github.svg";
import { useCallback, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useScrollSmooth } from "@/utils/useScrollSmooth";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../languageSwitcher/languageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollSmooth = useScrollSmooth();

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleOnClick = useCallback(
    (href: string) => {
      if (isHome) {
        scrollSmooth(href);
      } else {
        router.push(`/${locale}${href}`);
      }
      setMenuOpen(false);
    },
    [isHome, locale, router, scrollSmooth]
  );

  return (
    <header className={styles.headerSticky}>
      <div className={styles.headerContainer}>
        <div>
          <h1 className={styles.title} onClick={() => handleOnClick("#home")}>
            {t("title")}
          </h1>
          <p className={styles.subTitle}>{t("subTitle")}</p>
        </div>

        <nav
          className={`${styles.headerMenuContainer} ${
            menuOpen ? styles.headerMenuOpen : ""
          }`}
        >
          <a
            className={styles.headerMenuItem}
            onClick={() => handleOnClick("#projects")}
          >
            {t("projects")}
          </a>
          <a
            className={styles.headerMenuItem}
            onClick={() => handleOnClick("#experience")}
          >
            {t("workExperience")}
          </a>
          <a
            className={styles.headerMenuItem}
            onClick={() => handleOnClick("#skills")}
          >
            {t("skills")}
          </a>
          <a
            className={styles.headerMenuItem}
            onClick={() => handleOnClick("#about")}
          >
            {t("about")}
          </a>
          <a
            className={styles.headerMenuItem}
            onClick={() => handleOnClick("#contact")}
          >
            {t("contact")}
          </a>
        <LanguageSwitcher />
        </nav>

        {/* Hamburger button */}
        <button
          className={styles.hamburgerMenuIcon}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={styles.bottomLine} />
    </header>
  );
}
