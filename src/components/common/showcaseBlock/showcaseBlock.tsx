import * as styles from "./showcaseBlock.css";
import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "../button/button";

type ShowcaseBlockProps = {
  index?: string | number;
  title: string;
  children?: ReactNode;
  image: string;
  imageAlt?: string;
  tags?: string[];
  caseStudyHref?: string;
  githubHref?: string;
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
  reversed = false,
  className,
}: ShowcaseBlockProps) {
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

        {(caseStudyHref || githubHref) && (
          <div className={styles.links}>
            {caseStudyHref && (
              <Button
                variant="link"
                link
                href={caseStudyHref}
                className={styles.link}
              >
                View case study <ArrowRight size={16} />
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
                GitHub <ArrowUpRight size={16} />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
