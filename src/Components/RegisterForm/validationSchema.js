import * as yup from "yup";

const required = "*Campo obligatorio";

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .matches(/^\D+$/, "No puede contener números")
    .required(required),
  password: yup
    .string()
    .min(6, "Contraseña muy corta")
    .matches(/\d/, "Debe contener al menos 1 número")
    .matches(/[A-ZÑ]/, "Debe contener al menos 1 letra mayúscula")
    .required(required),
  email: yup.string().required(required),
});

export default validationSchema;
