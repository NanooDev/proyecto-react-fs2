import { Link } from "wouter";
import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {/* Link cambia la ruta sin recargar toda la aplicación. */}
                <li className={styles.item}>
                    <Link href="/">home</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/login">login</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/register">register</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
