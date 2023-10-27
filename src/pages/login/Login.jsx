import { Navigate } from "react-router-dom";
import Secret from "../secret/Secret";

const Login = (user) => (!user ? <Navigate to="/" /> : <Secret />);

export default Login;
