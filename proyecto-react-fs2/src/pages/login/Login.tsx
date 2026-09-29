/*import { useState } from "react";
import type { ChangeEvent } from "react";*/
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";

const Login = () => {
  /*
  // Cada estado conserva el valor escrito en uno de los campos del formulario.
  const [email, setEmail] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeContrasena = (event: ChangeEvent<HTMLInputElement>) => {
    setContrasena(event.target.value);
  };
  */

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
                    <button type="button" className="tab-button active" data-tab="login" aria-selected="true">Iniciar sesión</button>
                    <button type="button" className="tab-button" data-tab="register" aria-selected="false">Registrarse</button>
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

                <form className="auth-form" id="register-form">
                    <div className="input-row">
                        <div className="form-group">
                            <label htmlFor="register-name">Nombre</label>
                            <input id="register-name" type="text" placeholder="Tu nombre" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="register-lastname">Apellido</label>
                            <input id="register-lastname" type="text" placeholder="Tu apellido" required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="register-email">Correo electrónico</label>
                        <input id="register-email" type="email" placeholder="tuemail@ejemplo.com" required/>
                    </div>

                    <div className="input-row">
                        <div className="form-group">
                            <label htmlFor="register-password">Contraseña</label>
                            <input id="register-password" type="password" placeholder="Mínimo 8 caracteres" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="register-phone">Teléfono</label>
                            <input id="register-phone" type="tel" placeholder="+56 9 1234 5678" required/>
                        </div>
                    </div>

                    <label className="check-inline register-check">
                        <input type="checkbox" required/>
                        <span>Acepto términos y condiciones</span>
                    </label>

                    <button type="submit" className="btn-submit">Crear cuenta</button>
                </form>
            </div>
        </section>
    </main>
    </>
  );
};

export default Login;