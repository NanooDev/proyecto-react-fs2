import { Link } from "wouter";

const Register = () => {
  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-visual">
          <span className="eyebrow">MotoShop</span>
          <h1>Equípate para cada kilómetro.</h1>
          <p>Crea tu cuenta y encuentra el equipamiento que necesitas para rodar con confianza.</p>
          <ul className="auth-benefits">
            <li>Ofertas para la comunidad</li>
            <li>Historial de tus compras</li>
            <li>Una experiencia más rápida</li>
          </ul>
        </div>

        <div className="auth-card">
          <div className="auth-tabs" role="tablist" aria-label="Opciones de cuenta">
            <Link href="/login" className="tab-button">Iniciar sesión</Link>
            <span className="tab-button active">Registrarse</span>
          </div>

          <form className="auth-form active">
            <div className="input-row">
              <div className="form-group">
                <label htmlFor="register-name">Nombre</label>
                <input id="register-name" name="name" type="text" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="register-lastname">Apellido</label>
                <input id="register-lastname" name="lastname" type="text" placeholder="Tu apellido" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="register-email">Correo electrónico</label>
              <input id="register-email" name="email" type="email" placeholder="tuemail@ejemplo.com" required />
            </div>

            <div className="input-row">
              <div className="form-group">
                <label htmlFor="register-password">Contraseña</label>
                <input id="register-password" name="password" type="password" placeholder="Mínimo 8 caracteres" minLength={8} required />
              </div>
              <div className="form-group">
                <label htmlFor="register-phone">Teléfono</label>
                <input id="register-phone" name="phone" type="tel" placeholder="+56 9 1234 5678" required />
              </div>
            </div>

            <label className="check-inline register-check">
              <input type="checkbox" required />
              <span>Acepto términos y condiciones</span>
            </label>
            <button type="submit" className="btn-submit">Crear cuenta</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;