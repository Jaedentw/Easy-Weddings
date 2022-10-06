import React from "react";
import "../../styles/VendorPageItems.css"
import DropDown from "./DropDown";
import DropDownMenu from "./DropDownMenu";

export default function Decorator(props) {

  const decorator = props.decorator

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={decorator.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{decorator.name}</h1>
            <p><strong>Specialty: </strong> {decorator.specialty} - 
            <strong> Theme: </strong>{decorator.theme} - <a href={decorator.website_url}>Website</a></p>
          </div>
          <p>{decorator.description}</p>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong><div>{decorator.city}</div></p>
        <div class="upper-business">
        {props.state.tab === "Your Listings"? <i class="fa-sharp fa-solid fa-pen-to-square fa-lg"></i> : ( props.state.user.id &&         
          <DropDown>
            <DropDownMenu
              listing={decorator}
              state={props.state}
            />
          </DropDown>
          )}
        </div>
      </div>
    </section>
  )
}