import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../styles/CreateListings.css";

export default function CreateVenue(props) {

  const user_id = props.user.id

  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  function handleComplete(event) {
    event.preventDefault();
    inputs.user_id = user_id
      axios.post("/api/venues/", inputs)
        .then((response) => {
          props.getListingsData()
          navigate('/listings');
        })

        .catch((res) =>
        alert(res.response.data.message)
        );
    }
  


  return (
    <div class="listing-data">
      <form
        class="form"
        autoComplete="off"
        onSubmit={handleComplete}
      >
        <span>
          <div class="listing-group">
            <label>Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
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
        </span>
        <span>
          <div class="listing-group">
            <label>Capacity:</label>
            <input
              name="capacity"
              type="number"
              placeholder="Max Capacity"
              value={inputs.capacity || ""}
              onChange={handleChange}
            />
          </div>
          <div class="listing-group">
            <label>Theme:</label>
            <input
              name="theme"
              type="text"
              placeholder="Theme or Style"
              value={inputs.theme || ""}
              onChange={handleChange}
            />
          </div>
        </span>
        <div class="long-listing-group">
          <label>Features:</label>
          <input
            name="features"
            type="text"
            placeholder="Unique Features"
            value={inputs.features || ""}
            onChange={handleChange}
          />
        </div>
        <div class="long-listing-group">
          <label>Website URL</label>
          <input
            name="website_url"
            type="text"
            placeholder="http://"
            value={inputs.website_url || ""}
            onChange={handleChange}
          />
        </div>
        <div class="long-listing-group">
          <label>Image URL:</label>
          <input
            name="image_url"
            type="text"
            placeholder="http://"
            value={inputs.image_url || ""}
            onChange={handleChange}
          />
        </div>
        <div class="long-listing-group">
          <label>Description:</label>
          <textarea
            name="description"
            type="text"
            placeholder="About Your Venue"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </div>
        <div class="listing-submit">
          <input 
            type="submit" 
            value="Create"
          ></input>
        </div>
      </form>
    </div>
  );
}
