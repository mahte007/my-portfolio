import { Github, Linkedin } from "lucide-react";

import * as styles from "./footer.css"

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.bottomLine} />
            <div className={styles.mainContainer}>
              <div>© {new Date().getFullYear()} Máté Horváth</div>
              <div className={styles.linkContainer}>
                <a href="https://github.com/mahte007" target="_blank" aria-label="GitHub" className="flex items-center gap-2"> <Github size={16} /> GitHub</a>
                <a href="https://www.linkedin.com/in/horvath-mate3/" target="_blank" aria-label="LinkedIn" className="flex items-center gap-2"> <Linkedin size={16} /> LinkedIn</a>
              </div>
            </div>
        </footer>
    )
}