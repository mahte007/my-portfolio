import calendar from "/public/calendar.svg";

import * as styles from "./glowCard.css";
import { ReactNode, useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";

type GlowCardProps = {
  icon?: string;
  children?: ReactNode;
  className?: string;
};

export default function GlowCard({ children, icon, className }: GlowCardProps) {
  return (
    <div className={clsx(styles.glowCardContainer, className)}>
      {icon && (
          <Image alt="cardIcon" src={icon} width={30} height={30} />
      )}
      
      {children}
    </div>
  );
}
