import clsx from "clsx"
import { ReactNode } from "react"
import * as styles from "./titleCard.css"
import Image from "next/image"

type TitleCardProps = {
    title: string,
    titleHeaderBg?: string,
    borderColor?: string,
    titleIcon?: string,
    className?: string,
    children?: ReactNode,
}

export default function TitleCard({
    children,
    title,
    titleHeaderBg,
    titleIcon,
    borderColor,
    className,
    ...props
}: TitleCardProps) {
    return(
        <div className={styles.titleCardContainer}>
            <div className={clsx(
                titleHeaderBg,
                styles.titleCardHeader
            )}>
                <Image alt="titleIcon" src={titleIcon ?? ""} width={50} height={50} draggable={false} />
                {title}
            </div>
            <div style={{border: `2px solid ${borderColor}`}} className={styles.titleCardMainContainer}>
                {children}
            </div>
        </div>
    )
}