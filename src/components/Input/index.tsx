import { InputHTMLAttributes } from "react";

import styles from './styles.module.css'

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => (
  <input className={styles.input} {...props} />
)