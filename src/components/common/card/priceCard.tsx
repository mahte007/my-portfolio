import calendar from "/public/calendar.svg";

import * as styles from "./priceCard.css";
import { ReactNode, useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";
import CustomTitle from "../customTitle/customTitle";

type PriceCardProps = {
  children?: ReactNode;
  className?: string;
  title?: string;
  subTitle?: string;
  price?: string;
};

export default function PriceCard({ children, className, price, subTitle, title }: PriceCardProps) {
  return (
      <div className={clsx(styles.cardContainer, className)}>
        <CustomTitle heading="h5" className={styles.titleContainer}>{title}</CustomTitle>
        <p className={styles.priceContainer}>{price}</p>
        <p className={styles.subTitleContainer}>{subTitle}</p>
        {children}
      </div>
    );
}
