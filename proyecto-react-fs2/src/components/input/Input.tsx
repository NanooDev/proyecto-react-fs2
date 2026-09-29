import type { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      <input className={styles.input} onChange={props.onChange} />
    </div>
  );
};

export default Input;