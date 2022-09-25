import {useState} from "react";
import "../styles/Form.css"

export default function UserSignUp(props) {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <div class="form-container">
      <form
        class="form"
        autoComplete="off"
        onSubmit={event => event.preventDefault()}
      >
        <span>
          <label>First Name:</label>
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            value={inputs.first_name || ""}
            onChange={handleChange}
            data-testid="first-name-input"
          />
          <label>Last Name:</label>
          <input
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={inputs.last_name || ""}
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
          <label>Password:</label>
          <input
            name="password"
            type="text"
            placeholder="Password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <label>Confirmation:</label>
          <input
            name="password_confirmation"
            type="text"
            placeholder="Password Confirmation"
            value={inputs.password_confirmation || ""}
            onChange={handleChange}
          />
        </span>
      </form>
    </div>
  )
}