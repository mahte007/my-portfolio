"use client";

import { Menu, X } from "lucide-react";
import * as styles from "./header.css";
import Image from "next/image";
import github from "/public/github.svg";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
  setMenuOpen((prev) => {
    if (!prev) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
    return !prev;
  });
};

  return (
    <header className={styles.headerSticky}>
      <div className={styles.headerContainer}>
        <div>
          <h1 className={styles.title}>Máté Horváth</h1>
          <p className={styles.subTitle}>
            Frontend developer — building accessible & delightful UIs
          </p>
        </div>

        <nav
          className={`${styles.headerMenuContainer} ${
            menuOpen ? styles.headerMenuOpen : ""
          }`}
        >
          <a href="#projects" className={styles.headerMenuItem} onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#skills" className={styles.headerMenuItem} onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#contact" className={styles.headerMenuItem} onClick={() => setMenuOpen(false)}>
            Contact
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
