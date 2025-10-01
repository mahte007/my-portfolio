import calendar from "/public/calendar.svg";

import * as styles from "./glowCard.css";
import { ReactNode, useMemo } from "react";
import Image from "next/image";

type GlowCardProps = {
  icon?: string;
  children?: ReactNode;
};

export default function GlowCard({ children, icon }: GlowCardProps) {
  return (
    <div className={styles.glowCardContainer}>
      <Image alt="cardIcon" src={icon ?? ""} width={30} height={30} />
      {children}
    </div>
  );
}
