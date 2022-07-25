import { Label, Input, Required, Heading } from "..";
import { Link } from "react-router-dom";
import formik from "./Formik";

const LoginForm = () => {
  const { handleSubmit, handleChange, values, errors } = formik();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Heading content="Iniciar sesión" level={3} />
      <Label content="Nombre de usuario" htmlFor="username" />
      <Input
        name="username"
        change={handleChange}
        value={values.username}
        className={errors.username && "input-required"}
      />
      <Required message={errors.username} />
      <Label content="Contraseña" htmlFor="password" />
      <Input
        name="password"
        type="password"
        change={handleChange}
        value={values.password}
        className={errors.password && "input-required"}
      />
      <Required message={errors.password} />
      <button type="submit" className="input submit">
        Enviar
      </button>
      <span>
        <Link className="no-decoration" to="/registro">
          Registrarme
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
