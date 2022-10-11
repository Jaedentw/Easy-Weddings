import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../styles/CreateListings.css";

export default function CreateVendor(props) {

  const user_id = props.user.id

  const [inputs, setInputs] = useState(props.listing.vendor);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  function handleComplete(event) {
    event.preventDefault();
    inputs.user_id = user_id;
    
    if(props.listing) {
      axios.put(`/api/vendors/${inputs.id}`, inputs)
      .then((response) => {
        props.getListingsData()
        navigate('/listings');
      })
      .catch((res) =>
        console.log('Error Updating Vendor!', res.data)
      );
    } else {
      axios.post("/api/vendors/", inputs)
        .then((response) => {
          props.getListingsData()
          navigate('/listings');
        })
        .catch((res) =>
          console.log('Error Creating Vendor!', res.data)
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
            <label>Specialty:</label>
            <input
              name="specialty"
              type="text"
              placeholder="Specialty or Profession"
              value={inputs.specialty || ""}
              onChange={handleChange}
            />
          </div>
          <div class="listing-group">
            <label>Rate Per Hour:</label>
            <input
              name="rate_per_hour"
              type="number"
              placeholder="Rate Per Hour"
              value={inputs.rate_per_hour || ""}
              onChange={handleChange}
            />
          </div>
        </span>
        <div class="long-listing-group">
          <label>Rates Info:</label>
          <input
            name="rates_info"
            type="text"
            placeholder="Details on Pricing and Rates"
            value={inputs.rates_info || ""}
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
            placeholder="About Your Services"
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

