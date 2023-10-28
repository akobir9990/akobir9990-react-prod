import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login({ user, setUser, handleSubmit }) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="name"
          value={user}
          placeholder="Enter your name ..."
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={() => navigate("/admin")}>LogIn</button>
      </form>
    </div>
  );
}

export default Login;
