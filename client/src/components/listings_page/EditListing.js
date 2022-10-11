import React from "react";
import CreateCaterer from "./CreateComponents/CreateCaterer";
import CreateDecorator from "./CreateComponents/CreateDecorator";
import CreateVendor from "./CreateComponents/CreateVendor";
import CreateVenue from "./CreateComponents/CreateVenue";

export default function EditListing(props) {
  
  const user = props.state.user;
  const listing = props.state.listing

  return(
    <div class="create-listing">
      {listing.venue && 
      <div class="create-listing-container">
        <h2>Edit: {listing.venue.name}</h2>
        <CreateVenue user={user} getListingsData={props.getListingsData} listing={listing}/>
      </div>
      }
      {listing.vendor &&
        <div class="create-listing-container">
        <h2>Edit: {listing.vendor.name}</h2>
        <CreateVendor user={user} getListingsData={props.getListingsData} listing={listing}/>
      </div>
      }
      {listing.caterer &&
        <div class="create-listing-container">
        <h2>Edit: {listing.caterer.name}</h2>
        <CreateCaterer user={user} getListingsData={props.getListingsData} listing={listing}/>
      </div>
      }
      {listing.decorator &&
        <div class="create-listing-container">
        <h2>Edit: {listing.decorator.name}</h2>
        <CreateDecorator user={user} getListingsData={props.getListingsData} listing={listing}/>
      </div>
      }
    </div>
  )
}

