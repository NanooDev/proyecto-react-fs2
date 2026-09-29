import styles from "./Button.module.css";

interface ButtonProps {
  variant: "text" | "contained" | "outlined";
  children: string;
}

const Button = (props: ButtonProps) => {
  // data-variant permite que un solo componente tenga distintos estilos visuales.
  return (
    <button data-variant={props.variant} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
