import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../styles/CreateListings.css";

export default function CreateCaterer(props) {

  const user_id = props.user.id;
  
  let listing = {}
  if(props.listing) {
    listing = props.listing.caterer
  }
  const [inputs, setInputs] = useState(listing);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  function handleComplete(event) {
    console.log("inputs", inputs)
    event.preventDefault();
    inputs.user_id = user_id;
    
    if(props.listing) {
      axios.put(`/api/caterers/${inputs.id}`, inputs)
      .then((response) => {
        props.getListingsData();
        navigate('/listings');
      })
      .catch((res) =>
        console.log('Error Updating Caterer!', res)
      );
    } else {
      axios.post("/api/caterers/", inputs)
        .then((response) => {
          props.getListingsData();
          navigate('/listings');
        })
        .catch((res) =>
          alert(res.response.data.message)
        );
    };
  };

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
              placeholder="Max Serving Capacity"
              value={inputs.capacity || ""}
              onChange={handleChange}
            />
          </div>
          <div class="listing-group">
            <label>Cuisine:</label>
            <input
              name="cuisine"
              type="text"
              placeholder="Cuisine or Specialty"
              value={inputs.cuisine || ""}
              onChange={handleChange}
            />
          </div>
        </span>
        <div class="long-listing-group">
          <label>Alternatives:</label>
          <input
            name="alternatives"
            type="text"
            placeholder="Allergy and Dietary Options"
            value={inputs.alternatives || ""}
            onChange={handleChange}
          />
        </div>
        <div class="long-listing-group">
          <label>Menu URL</label>
          <input
            name="menu_url"
            type="text"
            placeholder="http://"
            value={inputs.menu_url || ""}
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
            placeholder="About Your Food and Services"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </div>
        <div class="listing-submit">
          <input 
            type="submit" 
            value={props.listing? "Update" : "Create"}
          ></input>
        </div>
      </form>
    </div>
  );
}

