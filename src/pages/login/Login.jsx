import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login({ username, setUserName, handleSubmit }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="name"
          value={username}
          placeholder="Enter your name ..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => {
            localStorage.setItem("user", JSON.stringify(username));
            navigate("/admin");
          }}
        >
          LogIn
        </button>
      </form>
    </div>
  );
}

export default Login;
