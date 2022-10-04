import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Login.module.css";

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
        navigate('/weddings');
        props.setTab('Weddings')
      })

      .catch((res) =>
        console.log('Error logging in!', res.data)
      );
  }

  const handleChange = (event) => {
    const newdata = { ...data };
    newdata[event.target.name] = event.target.value;
    setData(newdata);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className={styles['form-inner']}>
        <h2>Login</h2>
        <div className={styles['form-group']}>
          <label className={styles.label}>Email: </label>
          <input
            className={styles.input}
            name="email"
            type="text"
            placeholder="Email"
            value={data.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>Password: </label>
          <input
            className={styles.input}
            name="password"
            type="password"
            placeholder="Password"
            value={data.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <input type="submit" value="Login" classname={styles.input}></input>
        </div>
      </div>
    </form>
  );

}