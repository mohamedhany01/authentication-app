import { ErrorMessage, Field } from "formik";

const Input = (props) => {
  const { label, name, className, ...rest } = props;

  return (
    <div className={className}>
      <label htmlFor={name} className="form-label fw-medium">
        {label}
      </label>
      <Field id={name} name={name} className="form-control-costume" {...rest} />
      <ErrorMessage name={name}>
        {(meg) => {
          const isError = meg ? "error" : "";

          return (
            <div className={`field-message ${isError}`}>
              <p>
                <span className="icon icon-notification"></span>
                <span>{meg}</span>
              </p>
            </div>
          );
        }}
      </ErrorMessage>
    </div>
  );
};

export default Input;
