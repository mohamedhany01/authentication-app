const TextError = (props) => {
  const { children } = props;

  return (
    <div className="field-message">
      <p>
        <span className="icon icon-notification"></span>
        <span>{children}</span>
      </p>
    </div>
  );
};

export default TextError;
