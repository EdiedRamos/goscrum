import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { toast } from "react-toastify";
import { authLogin } from "../../Services/Apis";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginAction } from "../../Services/Store/Actions/sesionActions";

const Formik = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      authLogin(values).then((res) => {
        console.log("res", res);
        const { status_code } = res;
        if (status_code === 404) toast.error("Nombre de usuario no encontrado");
        else if (status_code === 401) toast.warn("Contraseña incorrecta");
        else if (status_code === 200) {
          dispatch(loginAction(res.result.token));
          toast.success(`Bienvenido ${values.userName}`);
          navigate("/", { replace: true });
        }
      });
    },
  });

  return formik;
};

export default Formik;
