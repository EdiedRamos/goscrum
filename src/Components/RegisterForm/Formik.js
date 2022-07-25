import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username.trim()) errors.username = "*Campo obligatorio";
  if (!values.password.trim()) errors.password = "*Campo obligatorio";
  if (!values.email.trim()) errors.email = "*Campo obligatorio";
  if (!values.teamId.trim()) errors.teamId = "*Campo obligatorio";
  return errors;
};

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      teamId: "",
      rol: "Team Member",
      continente: "America",
      region: "Otro",
    },
    validate,
    onSubmit: (values) => {
      console.log("formik", values);
    },
  });

  return formik;
};

export default Formik;
