import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { toast } from "react-toastify";
import { authLogin } from "../../Services/Apis";
import { useNavigate } from "react-router-dom";

const Formik = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      authLogin(values).then((res) => {
        const { status_code } = res;
        if (status_code === 404) toast.error("Nombre de usuario no encontrado");
        else if (status_code === 401) toast.warn("Contraseña incorrecta");
        else if (status_code === 200) {
          toast.success(`Bienvenido ${values.userName}`);
          navigate("/", { replace: true });
        }
      });
    },
  });

  return formik;
};

export default Formik;
