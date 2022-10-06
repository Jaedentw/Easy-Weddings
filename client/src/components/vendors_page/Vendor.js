import React from "react";
import "../../styles/VendorPageItems.css"
import DropDown from "./DropDown";
import DropDownMenu from "./DropDownMenu";


export default function Vendor(props) {

  const vendor = props.vendor

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={vendor.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{vendor.name}</h1>
            <p>
              <strong>Specialty: </strong> {vendor.specialty} - 
              <strong> Rate per hour: </strong>{vendor.rate_per_hour} - <a href={vendor.website_url}>Website</a></p>
          </div>
          <p>{vendor.description}</p>
          <div>
            <p>{vendor.rates_info}</p>
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong><div>{vendor.city}</div></p>
        <div class="upper-business">
        {props.state.tab === "Your Listings"? <i class="fa-sharp fa-solid fa-pen-to-square fa-lg"></i> : ( props.state.user.id &&         
          <DropDown>
            <DropDownMenu
              listing={vendor}
              state={props.state}
            />
          </DropDown>
          )}
        </div>
      </div>
    </section>
  )
}