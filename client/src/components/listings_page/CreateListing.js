import React, { useState } from "react";
import CreateCaterer from "./CreateComponents/CreateCaterer";
import CreateDecorator from "./CreateComponents/CreateDecorator";
import CreateVendor from "./CreateComponents/CreateVendor";
import CreateVenue from "./CreateComponents/CreateVenue";
import "../../styles/CreateListings.css";

export default function CreateListing(props) {

  const user = props.state.user;

  const [active, setActive] = useState('Venue');

  return (
    <div className="create-listing">
      <div className="create-listing-container">
        <h2>Create New Listing</h2>
        <div class="create-listing-buttons">
        <input 
          type="submit" 
          value="Venue"
          class={active === "Venue" ? "create-listing-btn-active" : "create-listing-btn"}
          onClick={() => setActive('Venue')}
        ></input>
        <input 
          type="submit" 
          value="Vendor"
          class={active === "Vendor" ? "create-listing-btn-active" : "create-listing-btn"}
          onClick={() => setActive('Vendor')}
        ></input>
        <input 
          type="submit" 
          value="Caterer"
          class={active === "Caterer" ? "create-listing-btn-active" : "create-listing-btn"}
          onClick={() => setActive('Caterer')}
        ></input>
        <input 
          type="submit" 
          value="Decorator"
          class={active === "Decorator" ? "create-listing-btn-active" : "create-listing-btn"}          onClick={() => setActive('Decorator')}
        ></input>
        </div>


        {active === "Venue" && <CreateVenue user={user} getListingsData={props.getListingsData}/>}
        {active === "Vendor" && <CreateVendor user={user} getListingsData={props.getListingsData}/>}
        {active === "Caterer" && <CreateCaterer user={user} getListingsData={props.getListingsData}/>}
        {active === "Decorator" && <CreateDecorator user={user} getListingsData={props.getListingsData}/>}
      </div>
    </div>
  );
}