import { useFormik } from "formik";

import validationSchema from "./validationSchema";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      importance: "",
      status: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.table(values);
    },
  });

  return formik;
};

export default Formik;
