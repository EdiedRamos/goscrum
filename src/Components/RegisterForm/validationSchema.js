import * as yup from "yup";

const required = "*Campo obligatorio";

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .trim()
    .matches(/^\D+$/, "No puede contener números")
    .required(required),
  password: yup
    .string()
    .trim()
    .min(6, "Contraseña muy corta")
    .matches(/\d/, "Debe contener al menos 1 número")
    .matches(/[A-ZÑ]/, "Debe contener al menos 1 letra mayúscula")
    .required(required),
  email: yup.string().email("Email inválido").required(required),
});

export default validationSchema;
