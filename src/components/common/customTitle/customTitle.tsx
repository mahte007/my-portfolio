import { ReactNode, useMemo } from "react"
import * as styles from "./customTitle.css"
import clsx from "clsx"


type TitleCardProps = {
    heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    subTitle?: string,
    className?: string,
    position?: "left" | "center" | "right",
    subTitlePosition?: "above" | "below" ,
    children?: ReactNode,
}

export default function CustomTitle({children, className, heading, subTitle, position, subTitlePosition}: TitleCardProps) {
    const getHeading = useMemo(() => {
    switch (heading) {
        case "h1":
            return <h1 className={styles.h1}>{children}</h1>
        case "h2":
            return <h2 className={styles.h2}>{children}</h2>
        case "h3":
            return <h3 className={styles.h3}>{children}</h3>
        case "h4":
            return <h4 className={styles.h4}>{children}</h4>
        case "h5":
            return <h5 className={styles.h5}>{children}</h5>
        case "h6":
            return <h6 className={styles.h6}>{children}</h6>
        default:
            return <p>{children}</p>
    }
}, [children, heading])

    return (
        <div className={clsx(
            styles.titleContainer,
            {
                "justify-start items-start": position === "left",
                "justify-center items-center": position === "center",
                "justify-end items-end": position === "right",
            },
            className
        )}>
            {subTitlePosition === "above" && (
                <p className={styles.subTitle}>{subTitle}</p>
            )}
            {getHeading}
            {subTitlePosition === "below" && (
                <p className={styles.subTitle}>{subTitle}</p>
            )}
        </div>
    )
}