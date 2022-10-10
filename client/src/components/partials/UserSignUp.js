import { useState } from "react";
import "../../styles/CreateListings.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";




export default function UserSignUp(props) {

  const [inputs, setInputs] = useState({});

  let [render, setRender] = useState(false);

  console.log('Input test', inputs);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  function handleRegister(event) {
    event.preventDefault();

    if (inputs.password !== inputs.password_confirmation) {
      console.log('passwords do not match')
      alert('passwords do not match!')
    }
    else {
      axios.post("/api/auth/register", inputs)
        .then((response) => {
          navigate('/login');
        })

        .catch((res) =>
        alert(res.response.data.message)
        );
    }
  }
  function switchEvent() {
    if (render === false) {
      setRender(true);
      inputs.is_business = true;
    }
    else {
      setRender(false);
      delete inputs.business_name;
      delete inputs.website_url;
      delete inputs.is_business;
    }
  }


  return (
    
    <div class="create-listing">
      <div class="create-listing-container">
        <h2>Register</h2>
        <div class="listing-data">
          <form
            class="form"
            autoComplete="off"
            onSubmit={handleRegister}
          >
            <span>
              <div class="listing-group">
                <label>First Name:</label>
                <input
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  value={inputs.first_name || ""}
                  onChange={handleChange}
                  data-testid="first-name-input"
                />
              </div>
              <div class="listing-group">
                <label>Last Name:</label>
                <input
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  value={inputs.last_name || ""}
                  onChange={handleChange}
                />
              </div>
            </span>
            <span>
              <div class="listing-group">
                <label>Country:</label>
                <input
                  name="country"
                  type="text"
                  placeholder="Country"
                  value={inputs.country || ""}
                  onChange={handleChange}
                />
              </div>
              <div class="listing-group">
                <label>Province:</label>
                <input
                  name="province"
                  type="text"
                  placeholder="Province"
                  value={inputs.province || ""}
                  onChange={handleChange}
                />
              </div>
            </span>
            <span>
              <div class="listing-group">
                <label>City:</label>
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={inputs.city || ""}
                  onChange={handleChange}
                />
              </div>
              <div class="listing-group">
                <label>Postal Code:</label>
                <input
                  name="postal_code"
                  type="text"
                  placeholder="Postal Code"
                  value={inputs.postal_code || ""}
                  onChange={handleChange}
                />
              </div>
            </span>
            <div class="long-listing-group">
              <label>Address:</label>
              <input
                name="address"
                type="text"
                placeholder="Address"
                value={inputs.address || ""}
                onChange={handleChange}
              />
            </div>
            <span>
              <div class="listing-group">
                <label>Email:</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div class="listing-group">
                <label>Phone:</label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  value={inputs.phone || ""}
                  onChange={handleChange}
                />
              </div>
            </span>
            <span>
              <div class="listing-group">
                <label>Password:</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                />
              </div>
              <div class="listing-group">
                <label>Confirmation:</label>
                <input
                  name="password_confirmation"
                  type="password"
                  placeholder="Password Confirmation"
                  value={inputs.password_confirmation || ""}
                  onChange={handleChange}
                />
              </div>
            </span>
    
            <div class="register-business">
              <p>Would you like to create a business account?</p>
              <div>
                <label>Yes</label>
                <input
                  type="checkbox"
                  name="is_business"
                  onClick={switchEvent}
                />
              </div>
            </div>
            {render === true &&
              <div class="listing-group">
                <label>Business Name:</label>
                <input
                  name="business_name"
                  type="text"
                  placeholder="Company Name"
                  value={inputs.business_name || ""}
                  onChange={handleChange}
                />
              </div>
            }
            {render === true && 
              <div class="long-listing-group">
                <label>Website URL:</label>
                <input
                  name="website_url"
                  type="text"
                  placeholder="http://"
                  value={inputs.website_url || ""}
                  onChange={handleChange}
                />
              </div>
            }
            <div class="listing-submit">
              <input type="submit" value="Register"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


