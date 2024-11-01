import { PropsWithChildren } from "react";
import styles from './Button.module.scss';
import classNames from "classnames";

interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  text: string;
  transparent?: boolean;
  addClass?: string;
}

export const Button = ({
  text,
  transparent,
  addClass,
  ...props
}: ButtonProps) => (
  <button className={classNames(styles.button, [addClass], { [styles.transparent]: transparent })} {...props}>
    <p className={classNames(styles.text, { [styles.transparent]: transparent })}>{text}</p>
  </button>
)