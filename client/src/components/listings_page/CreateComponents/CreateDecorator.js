import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../styles/CreateListings.css";

export default function CreateDecorator(props) {

  const user_id = props.user.id

  const [inputs, setInputs] = useState({});

  console.log('Input test', inputs);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  function handleComplete(event) {
    event.preventDefault();
    inputs.user_id = user_id
      axios.post("/api/decorators/", inputs)
        .then((response) => {
          navigate('/listings');
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
        onSubmit={handleComplete}
      >
        <span>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <label>City:</label>
          <input
            name="city"
            type="text"
            placeholder="city"
            value={inputs.city || ""}
            onChange={handleChange}
          />
        </span>
        <span>
          <label>website URL</label>
          <input
            name="website_url"
            type="text"
            placeholder="www."
            value={inputs.website_url || ""}
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Specialty:</label>
          <input
            name="specialty"
            type="text"
            placeholder=""
            value={inputs.specialty || ""}
            onChange={handleChange}
          />
          <label>Image URL:</label>
          <input
            name="image_url"
            type="text"
            placeholder="http://"
            value={inputs.image_url || ""}
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Description:</label>
          <input
            name="description"
            type="text"
            placeholder="About venue"
            value={inputs.description || ""}
            onChange={handleChange}
          />
          <label>Theme:</label>
          <input
            name="theme"
            type="text"
            placeholder=""
            value={inputs.theme || ""}
            onChange={handleChange}
          />
        </span>
        <input type="submit" value="Create"></input>
        </form>
        </div>
  );
}

