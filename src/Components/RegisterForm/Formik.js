import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { toast } from "react-toastify";
import { authRegister } from "../../Services/Apis";
import { useNavigate } from "react-router-dom";
import { validate as uuidValidate, v4 as uuid } from "uuid";

const Formik = (hasTeam) => {
  const navigate = useNavigate();

  const validate = ({ teamID }) => {
    const errors = {};
    if (hasTeam) {
      if (!teamID.trim().length) {
        errors.teamID = "*Campo obligatorio";
      } else if (!uuidValidate(teamID)) {
        errors.teamID = "El identificador es inválido";
      }
    }
    return errors;
  };

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
    validate,
    onSubmit: (values) => {
      authRegister({
        user: { ...values, teamID: hasTeam ? values.teamID : uuid() },
      }).then((res) => {
        const { status_code } = res;
        if (status_code === 201) {
          toast(`${values.userName} has sido registrado`);
          navigate("/", { replace: true });
        } else toast.error("Email ya registrado");
      });
    },
  });

  return formik;
};

export default Formik;
