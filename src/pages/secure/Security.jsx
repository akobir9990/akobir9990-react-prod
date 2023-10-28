/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function Security({ children, user }) {
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default Security;
