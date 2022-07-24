import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username.trim()) {
    errors.username = "*Campo obligatorio";
  }
  if (!values.password.trim()) {
    errors.password = "*Campo obligatorio";
  }
  return errors;
};

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert("enviando...");
    },
  });
  return formik;
};

export default Formik;
