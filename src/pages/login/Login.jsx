import { Navigate } from "react-router-dom";
import Secret from "../secret/Secret";

function Login(user, setUser, children) {
  if (user) {
    return <Navigate to="/" />;
  } else {
    children;
  }
  return (
    <>
      <Secret />
    </>
  );
}

export default Login;
