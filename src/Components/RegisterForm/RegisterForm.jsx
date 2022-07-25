import { FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { Label, Input, Heading, Select, Required } from "..";
import { authData } from "../../Services/Apis";
import formik from "./Formik";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [data, setData] = useState({});
  const [team, setTeam] = useState(false);

  const { handleChange, handleSubmit, values, errors } = formik();

  useEffect(() => {
    authData().then((data) => setData(data));
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Heading content="Registro" level={3} />
      <Label content="Nombre de usuario" htmlFor="username" />
      <Input
        type="text"
        name="username"
        change={handleChange}
        value={values.username}
        className={errors.username && "input-required"}
      />
      <Required message={errors.username} />
      <Label content="Contraseña" htmlFor="password" />
      <Input
        type="text"
        name="password"
        change={handleChange}
        value={values.password}
        className={errors.password && "input-required"}
      />
      <Required message={errors.password} />
      <Label content="Email" htmlFor="email" />
      <Input
        type="email"
        name="email"
        change={handleChange}
        value={values.email}
        className={errors.email && "input-required"}
      />
      <Required message={errors.email} />
      <FormControlLabel
        control={<Switch color="warning" onChange={() => setTeam(!team)} />}
        label="Perteneces a un equipo ya creado"
      />
      {team && (
        <>
          <Label
            content="Por favor, introduce el identificador de equipo"
            htmlFor="teamId"
          />
          <Input
            type="text"
            name="teamId"
            change={handleChange}
            value={values.teamId}
            className={errors.teamId && "input-required"}
          />
          <Required message={errors.teamId} />
        </>
      )}
      <Label content="Rol" htmlFor="rol" />
      <Select
        id="rol"
        data={data?.Rol}
        change={handleChange}
        value={values.rol}
      />
      <Label content="Continente" htmlFor="continente" />
      <Select
        id="continente"
        data={data?.continente}
        change={handleChange}
        value={values.continente}
      />
      {values?.continente === "America" && (
        <>
          <Label content="Región" htmlFor="region" />
          <Select
            id="region"
            data={data?.region}
            change={handleChange}
            value={values.region}
          />
        </>
      )}
      <button type="submit" className="input submit">
        Enviar
      </button>
      <span>
        <Link to="/login" className="no-decoration">
          Ir a inicio sesión
        </Link>
      </span>
    </form>
  );
};

export default RegisterForm;
