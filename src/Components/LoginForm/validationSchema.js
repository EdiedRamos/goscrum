import * as yup from "yup";

const required = "*Campo obligatorio";

const validationSchema = yup.object().shape({
  userName: yup.string().required(required),
  password: yup.string().required(required),
});

export default validationSchema;
