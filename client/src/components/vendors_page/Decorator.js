import React from "react";

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
            <p>Decorator - Specialty: {decorator.specialty} - <a href={decorator.website_url}>Website</a></p>
          </div>
          <p>{decorator.description}</p>
          <div>
            <strong>Theme: </strong>{decorator.theme || "none"}
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong><div>{decorator.city}</div></p>
        <div class="upper-business">
          <i class="fa-solid fa-plus fa-lg fa-sharp"></i>
          <i class="fa-solid fa-heart fa-lg"></i>
        </div>
      </div>
    </section>
  )
}