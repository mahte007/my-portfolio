"use client";

import { Menu } from "lucide-react";
import * as styles from "./header.css";
import Image from "next/image";
import github from "/public/github.svg";

export default function Header() {
  return (
    <header className={styles.headerSticky}>
      <div className={styles.headerContainer}>
        <div>
          <h1 className={styles.title}>Máté Horváth</h1>
          <p className={styles.subTitle}>
            Frontend developer — building accessible & delightful UIs
          </p>
        </div>

        <nav className={styles.headerMenuContainer}>
          <a href="#projects" className={styles.headerMenuItem}>
            Projects
          </a>
          <a href="#skills" className={styles.headerMenuItem}>
            Skills
          </a>
          <a href="#contact" className={styles.headerMenuItem}>
            Contact
          </a>
          <a href="https://github.com/mahte007" aria-label="GitHub" className={styles.headerMenuGit} target="_blank">
            <Image alt="github" src={github} width={25} height={25} />
            <span className="text-sm">GitHub</span>
          </a>
        </nav>

        <button className={styles.hamburgerMenuIcon}>
          <Menu size={20} />
        </button>
      </div>
      <div className={styles.bottomLine} />
    </header>
  );
}
