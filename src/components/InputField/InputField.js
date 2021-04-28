import "./InputField.css";
import { ErrorMessage, useField } from "formik";
// import TextField from "@material-ui/core/TextField";

const InputField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name}>{props.label}</label>
      <input {...props} {...field} />
      {/*   <TextField {...props} {...field} /> */}
      <ErrorMessage name={field.name} />
    </>
  );
};

export { InputField };
