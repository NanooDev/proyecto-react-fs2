import { useState } from "react";
import type { ChangeEvent } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";

const Login = () => {
  // Cada estado conserva el valor escrito en uno de los campos del formulario.
  const [email, setEmail] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeContrasena = (event: ChangeEvent<HTMLInputElement>) => {
    setContrasena(event.target.value);
  };

  return (
    <>
      <Card
        title="Login"
        subtitle="Bienvenido otra vez"
        footer={
          <>
            <Button variant="contained">Entrar</Button>
            <Button variant="text">Olvide mi contraseña</Button>
          </>
        }
      >
        <Input label="Email" onChange={handleChangeEmail} />
        <Input label="Contraseña" onChange={handleChangeContrasena} />
        <strong>{email}</strong>
        <strong>{contrasena}</strong>
      </Card>
    </>
  );
};

export default Login;