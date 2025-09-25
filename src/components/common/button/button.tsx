import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import * as styles from "./button.css"


type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  isLoading?: boolean;
  rounded?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    variant,
    children,
    isLoading = false,
    rounded = false,
    className,
    ...props
}: ButtonProps) {
    return (
        <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            disabled={isLoading || props.disabled}
            className={clsx(
                styles.button,
                {
                    [styles.primary]: variant === "primary",
                    [styles.secondary]: variant === "secondary",
                    [styles.outline]: variant === "outline",
                    [styles.ghost]: variant === "ghost",
                    [styles.link]: variant === "link",
                    [styles.rounded]: rounded,
                },
                className
            )}
        >
            {isLoading ? "Loading..." : children}
        </motion.button>
    )
}