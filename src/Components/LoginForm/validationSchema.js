import * as yup from "yup";

const required = "*Campo obligatorio";

const validationSchema = yup.object().shape({
  userName: yup.string().trim().required(required),
  password: yup.string().trim().required(required),
});

export default validationSchema;
