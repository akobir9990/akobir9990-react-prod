import { Navigate } from "react-router-dom";
import Secret from "../secret/Secret";

function Login(user) {
  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <Secret />
      </>
    );
  }
}

export default Login;
