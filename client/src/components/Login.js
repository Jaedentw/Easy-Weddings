import { useState } from "react";
import "../styles/Form.css"


export default function Login(props) {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  return (
    <form>
      <label for="email">Enter your email:</label>
      <input type="email" id="email" name="email"></input>

      <label for="email">Enter your password:</label>
      <input type="password" id="password" name="password"></input>

    </form>




  );

}