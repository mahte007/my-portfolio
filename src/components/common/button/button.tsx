import { motion } from "framer-motion";
import { ButtonHTMLAttributes, useCallback, useState } from "react";
import clsx from "clsx";
import * as styles from "./button.css";
import tick from "/public/tick.svg";
import clipboard from "/public/clipboard.svg";
import Image from "next/image";
import { useScrollSmooth } from "@/utils/useScrollSmooth";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  isLoading?: boolean;
  rounded?: boolean;
  copy?: boolean;
  id?: string;
  href?: string;
  target?: string;
  link?: boolean;
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
  link,
  className,
  ...props
}: ButtonProps) {
  const [copied, setCopied] = useState(false);

  const scrollSmooth = useScrollSmooth()

  const mainStyles = {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
    [styles.outline]: variant === "outline",
    [styles.ghost]: variant === "ghost",
    [styles.link]: variant === "link",
    [styles.rounded]: rounded,
    [styles.disabled]: copied,
  };

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (copy) {
        const textToCopy = (e.target as HTMLButtonElement).innerText;

        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }

      if (href) {
        scrollSmooth(href)
      }
    },
    [copy, href, scrollSmooth]
  );

  if (href && link) {
    return (
      <motion.a
        id={id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(styles.button, mainStyles, className)}
        href={href}
        target={target}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isLoading || props.disabled || copied}
      className={clsx(styles.button, mainStyles, className)}
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
              className={styles.copyButton}
            >
              <span>{children}</span>
              <Image alt="copyButton" src={tick} width={25} height={25} className="pr-1" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className={styles.copyButton}
            >
              <span>{children}</span>
              <Image alt="copyButton" src={clipboard} width={25} height={25} className="pr-1" />
            </motion.span>
          )}
        </>
      ) : (
        <>{isLoading ? "Loading..." : <>{children}</>}</>
      )}
    </motion.button>
  );
}
