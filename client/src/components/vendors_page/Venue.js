import React from "react";
import "../../styles/VendorPageItems.css"
import DropDown from "./DropDown";
import DropDownMenu from "./DropDownMenu";


export default function Venue(props) {

  const venue = props.venue

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={venue.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{venue.name}</h1>
            <p><strong>Capacity: </strong>{venue.capacity} - <strong>Theme: </strong>{venue.theme} - <a href={venue.website_url}>Website</a></p>
          </div>
          <p>{venue.description}</p>
          <div>
            <p>{venue.extra_features}</p>
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong><div>{venue.city}</div></p>
        <div class="upper-business">
        {props.state.tab === "Your Listings"? <i class="fa-sharp fa-solid fa-pen-to-square fa-lg"></i> : ( props.state.user.id &&         
          <DropDown>
            <DropDownMenu
              listing={venue}
              state={props.state}
            />
          </DropDown>
          )}
        </div>
      </div>
    </section>
  )
}