import React from "react";

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
            <p>Venue - Capacity: {venue.capacity} - <a href={venue.website_url}>Website</a></p>
          </div>
          <p>{venue.description}</p>
          <div>
            <p>{venue.extra_features}</p>
            <p>{venue.theme}</p>
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong><div>{venue.city}</div></p>
        <div class="upper-business">
          <i class="fa-solid fa-plus fa-lg fa-sharp"></i>
          <i class="fa-solid fa-heart fa-lg"></i>
        </div>
      </div>
    </section>
  )
}