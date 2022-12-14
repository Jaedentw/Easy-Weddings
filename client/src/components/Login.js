import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

export default function Login(props) {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  
  function handleLogin(event) {
    event.preventDefault();
    
    axios.post("/api/auth/login", data)
      .then((response) => {
        props.setUser(response.data.user);
        if (response.data.user.is_business) {
          navigate('/listings');
          props.setTab('Listings');
        }
        else {
          navigate('/weddings');
          props.setTab('Weddings');
        }
      })
      .catch((res) =>
        alert('Incorrect username or password!')
      );
  }

  const handleChange = (event) => {
    const newdata = { ...data };
    newdata[event.target.name] = event.target.value;
    setData(newdata);
  };

  return (
    <div class="login-container">
      <form onSubmit={handleLogin}>
        <div className='form-inner'>
          <h2>Login</h2>
          <div className='form-group'>
            <label >Email: </label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={data.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Password: </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={data.password || ""}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input type="submit" value="Login"></input>
          </div>
        </div>
      </form>
    </div>
  );

}