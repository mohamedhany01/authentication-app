import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import Radio from "./components/Radio";
import Select from "./components/Select";
import TextArea from "./components/TextArea";

function Controller(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    default:
      return null;
  }
}

export default Controller;
