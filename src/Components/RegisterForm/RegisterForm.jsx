import { FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { Label, Input, Heading, Select, Required } from "..";
import { authData } from "../../Services/Apis";
import formik from "./Formik";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

const uuid = uuidv4();

const RegisterForm = () => {
  const [data, setData] = useState({});
  const [team, setTeam] = useState(false);

  const { handleChange, handleSubmit, values, errors, setFieldValue } =
    formik();

  useEffect(() => {
    setFieldValue("teamID", team ? "" : uuid);
  }, [team]);

  useEffect(() => {
    authData().then((data) => setData(data));
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Heading content="Registro" level={3} />
      <Label content="Nombre de usuario" htmlFor="userName" />
      <Input
        type="text"
        name="userName"
        change={handleChange}
        value={values.userName}
        className={errors.userName && "input-required"}
      />
      <Required message={errors.userName} />
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
            htmlFor="teamID"
          />
          <Input
            type="text"
            name="teamID"
            change={handleChange}
            value={values.teamID}
            className={errors.teamID && "input-required"}
          />
          <Required message={errors.teamID} />
        </>
      )}
      <Label content="Rol" htmlFor="role" />
      <Select
        id="role"
        data={data?.Rol}
        change={handleChange}
        value={values.role}
      />
      <Label content="Continente" htmlFor="continent" />
      <Select
        id="continent"
        data={data?.continente}
        change={handleChange}
        value={values.continent}
      />
      {values?.continent === "America" && (
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
