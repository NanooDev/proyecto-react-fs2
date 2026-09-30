import { Link } from "wouter";

const Login = () => {
  return (
    <>
      <main className="auth-page">
        <section className="auth-shell">
            <div className="auth-visual">
                <span className="eyebrow">MotoShop</span>
                <h1>Tu cuenta para la mejor experiencia en ruta.</h1>
                <p>Accede a tus compras, guarda tus artículos favoritos y disfruta de ofertas exclusivas para tu equipamiento.</p>

                <ul className="auth-benefits">
                    <li>Seguimiento de compras</li>
                    <li>Descuentos por temporada</li>
                    <li>Favoritos y historial</li>
                </ul>
            </div>

            <div className="auth-card">
                <div className="auth-tabs" role="tablist" aria-label="Opciones de cuenta">
                    <span className="tab-button active">Iniciar sesión</span>
                    <Link href="/register" className="tab-button">Registrarse</Link>
                </div>

                <form className="auth-form active" id="login-form">
                    <div className="form-group">
                        <label htmlFor="login-email">Correo electrónico</label>
                        <input id="login-email" type="email" placeholder="tuemail@ejemplo.com" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="login-password">Contraseña</label>
                        <input id="login-password" type="password" placeholder="••••••••" required/>
                    </div>

                    <div className="form-row-inline">
                        <label className="check-inline">
                            <input type="checkbox" />
                            <span>Recordarme</span>
                        </label>
                        <a href="#" className="text-link">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button type="submit" className="btn-submit">Ingresar</button>
                </form>

                <p className="form-link">¿No tienes una cuenta? <Link href="/register">Registrarse</Link></p>
            </div>
        </section>
    </main>
    </>
  );
};

export default Login;