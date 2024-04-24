
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log("Form submitted");
    const adminUsername = process.env.REACT_APP_ADMIN_USERNAME;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    console.log(adminUsername);
    console.log(adminPassword);

    if (data.username === adminUsername && data.password === adminPassword) {
      navigate("/admin")
      localStorage.setItem("accessToken", process.env.REACT_APP_ACCESS_TOKEN);
    } else {
      navigate("/adminLogin");
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" name="username" id="username" />
      <input type="password" placeholder="Password" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
