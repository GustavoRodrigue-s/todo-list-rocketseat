import { ButtonHTMLAttributes } from "react";

import styles from './styles.module.css'

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
  <button className={styles.button} {...rest}>{children}</button>
)