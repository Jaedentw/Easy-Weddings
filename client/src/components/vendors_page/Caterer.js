import React from "react";
import "../../styles/VendorPageItems.css"

export default function Caterer(props) {

  const caterer = props.caterer

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={caterer.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{caterer.name}</h1>
            <p>
              <strong>Specialty: </strong>
               {caterer.cuisine} - 
              <strong> Capacity: </strong> {caterer.capacity} - <a href={caterer.menu_url}>Menu</a>
            </p>
          </div>
          <p>{caterer.description}</p>
          <div>
            <p>{caterer.food_alternatives}</p>
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong><div>{caterer.city}</div></p>
        <div class="upper-business">
          {props.state.tab === "Your Listings"? <i class="fa-sharp fa-solid fa-pen-to-square fa-lg"></i> : <i class="fa-sharp fa-solid fa-plus fa-lg"></i>}
        </div>
      </div>
    </section>
  )
}