import { useState } from "react";
import "../../styles/Form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BusinessSignUp(props) {

  const [inputs, setInputs] = useState({});


  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  function handleRegister(event) {
    event.preventDefault();

    axios.post("/api/businesses/", inputs)
      .then((response) => {
        navigate('/login');
      })

      .catch((res) =>
        console.log('Error logging in!', res.data)
      );
  }



  return (
    <div class="form-container">
      <form
        class="form"
        autoComplete="off"
        onSubmit={handleRegister}
      >
        <span>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Buisness name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Email:</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <label>Phone:</label>
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Country:</label>
          <input
            name="country"
            type="text"
            placeholder="Country"
            value={inputs.country || ""}
            onChange={handleChange}
          />
          <label>Province:</label>
          <input
            name="province"
            type="text"
            placeholder="Province"
            value={inputs.province || ""}
            onChange={handleChange}
          />
        </span>
        <span>
          <label>City:</label>
          <input
            name="city"
            type="text"
            placeholder="City"
            value={inputs.city || ""}
            onChange={handleChange}
          />
          <label>Postal Code:</label>
          <input
            name="postal_code"
            type="text"
            placeholder="Postal Code"
            value={inputs.postal_code || ""}
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Address:</label>
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={inputs.address || ""}
            onChange={handleChange}
          />
        </span>

        <span>
          <label>Website:</label>
          <input
            name="website_url"
            type="text"
            placeholder="Address"
            value={inputs.website_url || ""}
            onChange={handleChange}
          />
        </span>

        <span>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <label>Confirmation:</label>
          <input
            name="password_confirmation"
            type="password"
            placeholder="Password Confirmation"
            value={inputs.password_confirmation || ""}
            onChange={handleChange}
          />
        </span>

        <div>
          <input type="submit" value="Register"></input>
        </div>
      </form>

    </div>
  );
}


