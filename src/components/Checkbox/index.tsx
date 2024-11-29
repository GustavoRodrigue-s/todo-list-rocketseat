import { PropsWithChildren } from "react";

import styles from './styles.module.css'
import { Check } from "phosphor-react";

interface CheckboxProps extends PropsWithChildren {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ children, checked, onChange }) => (
  <label className={styles.checkbox} onClick={onChange}>
    <input type="checkbox" checked={checked} />
    <button>
      <Check size={12} />
    </button>
    {children}
  </label>
)