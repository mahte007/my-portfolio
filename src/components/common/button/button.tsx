import { motion } from "framer-motion";
import { ButtonHTMLAttributes, useCallback, useState } from "react";
import clsx from "clsx";
import * as styles from "./button.css";
import tick from "/public/tick.svg";
import clipboard from "/public/clipboard.svg";
import Image from "next/image";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  isLoading?: boolean;
  rounded?: boolean;
  copy?: boolean;
  id?: string;
  href?: string;
  target?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant,
  children,
  isLoading = false,
  rounded = false,
  copy = false,
  id,
  href,
  target,
  className,
  ...props
}: ButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (copy) {
        const textToCopy = (e.target as HTMLButtonElement).innerText;

        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    },
    [copy]
  );

  return (
    <motion.button
      id={id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isLoading || props.disabled || copied}
      className={clsx(
        styles.button,
        {
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
          [styles.outline]: variant === "outline",
          [styles.ghost]: variant === "ghost",
          [styles.link]: variant === "link",
          [styles.rounded]: rounded,
          [styles.disabled]: copied,
        },
        className
      )}
      onClick={handleOnClick}
    >
      {copy ? (
        <>
          {copied ? (
            <motion.span
              key="check"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <span>{children}</span>
              <Image alt="copyButton" src={tick} width={20} height={20} />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <span>{children}</span>
              <Image alt="copyButton" src={clipboard} width={20} height={20} />
            </motion.span>
          )}
        </>
      ) : (
        <>{isLoading ? "Loading..." : <a href={href} target={target}>{children}</a>}</>
      )}
    </motion.button>
  );
}
