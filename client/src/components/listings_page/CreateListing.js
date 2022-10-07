import React, { useState } from "react";
import CreateCaterer from "./CreateComponents/CreateCaterer";
import CreateDecorator from "./CreateComponents/CreateDecorator";
import CreateVendor from "./CreateComponents/CreateVendor";
import CreateVenue from "./CreateComponents/CreateVenue";
import "../../styles/createListings.css";

export default function CreateListing(props) {

  const user = props.state.user;

  const [active, setActive] = useState('Venue');

  return (
    <div className="create-listing">

      <h1>Create new Listing</h1>
      <div>
      <input type="submit" value="Venue" onClick={() => setActive('Venue')}></input>
      <input type="submit" value="Vendor" onClick={() => setActive('Vendor')}></input>
      <input type="submit" value="Caterer" onClick={() => setActive('Caterer')}></input>
      <input type="submit" value="Decorator" onClick={() => setActive('Decorator')}></input>
      </div>


      {active === "Venue" && <CreateVenue user={user} />}
      {active === "Vendor" && <CreateVendor user={user} />}
      {active === "Caterer" && <CreateCaterer user={user} />}
      {active === "Decorator" && <CreateDecorator user={user} />}


    </div>
  );
}