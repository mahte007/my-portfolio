import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-12 py-8 border-t border-gray-700 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between">
            <div>© {new Date().getFullYear()} Your Name</div>
            <div className="flex gap-4 mt-3 sm:mt-0">
              <a href="#" aria-label="GitHub" className="flex items-center gap-2"> <Github size={16} /> GitHub</a>
              <a href="#" aria-label="LinkedIn" className="flex items-center gap-2"> <Linkedin size={16} /> LinkedIn</a>
            </div>
          </footer>
    )
}