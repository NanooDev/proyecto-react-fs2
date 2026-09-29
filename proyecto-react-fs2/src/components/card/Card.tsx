import type { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  children: ReactNode;
}

const Card = ({ title, subtitle, footer, children }: CardProps) => {
  // El contenido se compone por slots opcionales: encabezado, cuerpo y pie.
  return (
    <div className={styles.card}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
