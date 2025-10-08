import { Menu, X } from "lucide-react";
import * as styles from "./header.css";
import Image from "next/image";
import github from "/public/github.svg";
import { useCallback, useState } from "react";
import { useScrollSmooth } from "@/utils/useScrollSmooth";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollSmooth = useScrollSmooth()

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  const handleOnClick = useCallback((href: string) => {
    scrollSmooth(href)
    setMenuOpen(false)
  }, [scrollSmooth])

  return (
    <header className={styles.headerSticky}>
      <div className={styles.headerContainer}>
        <div>
          <h1 className={styles.title} onClick={() => handleOnClick("#home")}>Máté Horváth</h1>
          <p className={styles.subTitle}>
            Frontend developer — building accessible & delightful UIs
          </p>
        </div>

        <nav
          className={`${styles.headerMenuContainer} ${
            menuOpen ? styles.headerMenuOpen : ""
          }`}
        >
          <a className={styles.headerMenuItem} onClick={() => handleOnClick("#projects")}>
            Projects
          </a>
          <a className={styles.headerMenuItem} onClick={() => handleOnClick("#packages")}>
            Prices
          </a>
          <a className={styles.headerMenuItem} onClick={() => handleOnClick("#contract")}>
            For Agencies
          </a>
          <a className={styles.headerMenuItem} onClick={() => handleOnClick("#contact")}>
            Contact
          </a>
          <a className={styles.headerMenuItem} onClick={() => handleOnClick("#skills")}>
            Skills
          </a>
          <a className={styles.headerMenuItem} onClick={() => handleOnClick("#experience")}>
            Work Experience
          </a>
          <a
            href="https://github.com/mahte007"
            aria-label="GitHub"
            className={styles.headerMenuGit}
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            <Image alt="github" src={github} width={25} height={25} />
            <span className="text-sm">GitHub</span>
          </a>
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
