import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const TextArea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} as="textarea" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
