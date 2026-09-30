import { Link } from "wouter";

const Menu = () => {
    return (
        <header>
            <nav>
                <Link href="/" className="brand">
                    Moto<span>Shop</span>
                </Link>

                <div className="user-actions">
                    <Link href="/login" className="btn-user" title="Iniciar sesión">
                        <span aria-hidden="true">👤</span> Mi Cuenta
                    </Link>
                    <span className="btn-cart" title="Carrito de compras">
                        <span aria-hidden="true">🛒</span> Carrito <span id="contador-carrito">0</span>
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default Menu;
