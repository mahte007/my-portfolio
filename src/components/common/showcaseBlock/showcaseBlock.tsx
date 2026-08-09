import * as styles from "./showcaseBlock.css";
import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "../button/button";
import { useTranslations } from "next-intl";

type ShowcaseBlockProps = {
  index?: string | number;
  title: string;
  children?: ReactNode;
  image: string;
  imageAlt?: string;
  tags?: string[];
  caseStudyHref?: string;
  githubHref?: string;
  liveHref?: string;
  reversed?: boolean;
  className?: string;
};

export default function ShowcaseBlock({
  index,
  title,
  children,
  image,
  imageAlt,
  tags,
  caseStudyHref,
  githubHref,
  liveHref,
  reversed = false,
  className,
}: ShowcaseBlockProps) {
  const t = useTranslations("ProjectsSection");

  return (
    <div className={clsx(styles.container, className)}>
      <div
        className={clsx(
          styles.imageWrapper,
          reversed && styles.imageWrapperReversed
        )}
      >
        <Image
          alt={imageAlt ?? title}
          src={image}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={styles.image}
        />
      </div>

      <div className={clsx(styles.content, reversed && styles.contentReversed)}>
        {index !== undefined && (
          <span className={styles.index}>
            {typeof index === "number"
              ? String(index).padStart(2, "0")
              : index}
          </span>
        )}
        <h3 className={styles.title}>{title}</h3>
        {children && <p className={styles.description}>{children}</p>}

        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {(caseStudyHref || githubHref || liveHref) && (
          <div className={styles.links}>
            {caseStudyHref && (
              <Button
                variant="link"
                link
                href={caseStudyHref}
                className={styles.link}
              >
                {t("showcaseBlock.caseStudy")} <ArrowRight size={16} />
              </Button>
            )}
            {githubHref && (
              <Button
                variant="link"
                link
                href={githubHref}
                target="_blank"
                className={styles.link}
              >
                {t("showcaseBlock.github")} <ArrowUpRight size={16} />
              </Button>
            )}
            {liveHref && (
              <Button
                variant="link"
                link
                href={liveHref}
                target="_blank"
                className={styles.link}
              >
                {t("showcaseBlock.live")} <ArrowUpRight size={16} />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
