import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { addTask } from "../../Services/Store/Actions/tasksActions";

import validationSchema from "./validationSchema";

const Formik = () => {
  const dispatch = useDispatch();

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
      const task = {
        task: {
          ...values,
        },
      };
      dispatch(addTask(task));
    },
  });

  return formik;
};

export default Formik;
