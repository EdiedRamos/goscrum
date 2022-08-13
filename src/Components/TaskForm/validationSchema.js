import * as yup from "yup";

const required = "*Campo obligatorio";

const validationSchema = yup.object().shape({
  title: yup.string().trim().required(required),
  importance: yup.string().required(required),
  status: yup.string().required(required),
  description: yup.string().trim().required(required),
});

export default validationSchema;
