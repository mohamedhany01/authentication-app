import ReactDOM from "react-dom";
import App from "./components/App";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import { UserProvider } from "./contexts/UserContext";

ReactDOM.render(
  <AuthenticationProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </AuthenticationProvider>,
  document.getElementById("root")
);
