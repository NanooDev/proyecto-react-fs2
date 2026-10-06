import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "wouter";

interface LoginForm {
  email: string;
  password: string;
  remember: boolean;
}

const Login = () => {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    console.log("Datos del login:", form);
  }, [form]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login enviado:", form);
  };

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

                <form className="auth-form active" id="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login-email">Correo electrónico</label>
                        <input id="login-email" name="email" type="email" placeholder="tuemail@ejemplo.com" value={form.email} onChange={handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="login-password">Contraseña</label>
                        <input id="login-password" name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} required/>
                    </div>

                    <div className="form-row-inline">
                        <label className="check-inline">
                                <input name="remember" type="checkbox" checked={form.remember} onChange={handleChange} />
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