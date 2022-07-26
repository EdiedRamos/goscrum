import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { toast } from "react-toastify";
import { authRegister } from "../../Services/Apis";
import { useNavigate } from "react-router-dom";

const Formik = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      teamID: "",
      role: "Team Member",
      continent: "America",
      region: "Otro",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("formik", values);
      authRegister({ user: values }).then((res) => {
        const { status_code } = res;
        if (status_code === 201) {
          toast(`${values.userName} has sido registrado`);
          navigate("/", { replace: true });
        } else toast.error("Nombre de usuario o email ya registrados");
      });
    },
  });

  return formik;
};

export default Formik;
