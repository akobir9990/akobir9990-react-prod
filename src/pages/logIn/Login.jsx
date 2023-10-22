import "./Login.css";

function Login() {
  function handleEnter() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    if (userName === "akobir" && password === "9990") {
      location.href = "/adminadmin";
    } else {
      alert("yana bir urinib ko'ring userName: akobir,  password: 9990");
    }
  }
  return (
    <div className="loginContainer">
      <div className="inputBox">
        <h1 className="title">LogIn</h1>
        <label htmlFor="userName">User name</label>
        <input type="text" name="userName" id="userName" /> <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        <button onClick={handleEnter}>Enter</button>
      </div>
    </div>
  );
}

export default Login;
