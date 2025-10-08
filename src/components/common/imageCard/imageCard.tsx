import * as styles from "./imageCard.css";
import { ReactNode, useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";
import CustomTitle from "../customTitle/customTitle";
import Button from "../button/button";

type ImageCard = {
  children?: ReactNode;
  className?: string;
  image: string;
  title?: string;
  buttonText?: string;
  href?: string;
  target?: string;
  tags?: string[];
};

export default function ImageCard({
  children,
  className,
  image,
  buttonText,
  title,
  href,
  target,
  tags
}: ImageCard) {
  return (
    <div className={clsx(styles.imageCardContainer, className)}>
      <div className="h-fit">
        <Image
          alt={image}
          src={image}
          width={500}
          height={500}
          className="rounded-tl-2xl rounded-tr-2xl"
        />
      </div>
      <CustomTitle heading="h5" className={styles.titleContainer}>
        {title}
      </CustomTitle>
      <div className={styles.mainContainer}>
        {children}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags && tags.map((t, j) => (
            <span
              key={j}
              className="text-xs px-2 py-1 bg-gray-800 rounded text-white"
            >
              {t}
            </span>
          ))}
        </div>
        {buttonText && (
          <Button
            variant="primary"
            href={href}
            target={target}
            link
            className="text-center"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}
