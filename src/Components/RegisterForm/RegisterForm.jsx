import { Label, Input, Required } from "../../Components";
import formik from "./Formik";

const RegisterForm = () => {
  const { handleSubmit, handleChange, values, errors } = formik();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Iniciar sesión</h3>
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
      <span>Registrarme</span>
    </form>
  );
};

export default RegisterForm;
