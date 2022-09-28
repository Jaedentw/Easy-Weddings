import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../styles/Form.css";
import axios from "axios";


export default function Login(props) {


  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();


  function handleLogin(event){
    console.log('This is the credentials',event)
    event.preventDefault();


    axios.post("/api/auth/login", data)
    .then((response) => {

      console.log(response);
      props.setUser(response.data.user)
      navigate('/')
    })
  
    .catch(
      console.log('Error logging in!')
    )

  }

  const handleChange = (event) => {
    const newdata = {...data}
    newdata[event.target.name] = event.target.value
    setData(newdata)
  }

  

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={data.email || ""}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={data.password || ""}
          onChange={handleChange}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>


  );

}