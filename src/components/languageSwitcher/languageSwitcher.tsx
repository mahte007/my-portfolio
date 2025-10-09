import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import hu from "/public/hun-flag.svg";
import en from "/public/eng-flag.svg";
import Image from "next/image";
import * as styles from "./languageSwitcher.css"
import clsx from "clsx";

type Language = {
  code: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", flag: en },
  { code: "hu", flag: hu },
];

export default function LanguageSwitcher() {
  const pathName = usePathname()
  const segments = pathName.split("/").filter(Boolean);
  const lang = segments[0] || "en";
  
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = () => {
    setIsOpen(false);
  };

  const currentCode = languages.find(({code}) => code === lang)?.code
  const currentFlag = languages.find(({code}) => code === lang)?.flag

  return (
    <div className={styles.languageSwitcherContainer}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.switcherButton}>
        <Image alt="flag" src={currentFlag ?? ""} width={25} height={25} />
      </button>

      {isOpen && (
        <div className={styles.dropDownContainer}>
          <div className="py-1">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                className={clsx(styles.link, currentCode === lang.code ? styles.activeLink : styles.hoverLink)}
                onClick={handleSelect}
                href={"/"}
                locale={lang.code}
              >
                <Image alt="flag" src={lang.flag} width={25} height={25} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
