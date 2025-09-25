'use client'

import { Github, Menu } from "lucide-react";
import * as styles from "./header.css"

export default function Header () {
    return (
        <header className={styles.headerContainer}>
          <div>
            <h1 className={styles.title}>Máté Horváth</h1>
            <p className={styles.subTitle}>Frontend developer — building accessible & delightful UIs</p>
          </div>

          <nav className={styles.headerMenuContainer}>
            <a href="#projects" className={styles.headerMenuItem}>Projects</a>
            <a href="#skills" className={styles.headerMenuItem}>Skills</a>
            <a href="#contact" className={styles.headerMenuItem}>Contact</a>
            <a href="#" aria-label="GitHub" className={styles.headerMenuGit}>
              <Github size={16} /> <span className="text-sm">GitHub</span>
            </a>
          </nav>

          <button className={styles.hamburgerMenuIcon}>
            <Menu size={20} />
          </button>
        </header>
    )
}