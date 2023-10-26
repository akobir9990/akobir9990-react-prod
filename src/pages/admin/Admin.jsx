import { useState } from "react";
import Login from "../login/Login";

function Admin() {
  const [user, setUser] = useState(true);

  return <Login user={user} setUser={setUser} />;
}

export default Admin;
