import { useState } from "react";
import Login from "../login/Login";


function Admin() {
  const [user, setUser] = useState(null);

  return <Login user={user} setUser={setUser} />;
}

export default Admin;
