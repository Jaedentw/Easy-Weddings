import React from 'react'
import "../../styles/BusinessListItem.css"

export default function BusinessListItem(props) {

  return (
    <section class="business-container">
      <div class="upper-business">
        <img
          src={props.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text">
          <div class="upper-text">
            <h1>{props.name}</h1>
            <p>{props.profession}</p>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
      <div class="lower-business">

        <p> <strong class="location">Located in:</strong><div>{props.city}</div></p>

        <div class="upper-business">
          <i class="fa-solid fa-plus fa-lg fa-sharp"></i>
          <i class="fa-solid fa-heart fa-lg"></i>
        </div>

      </div>
    </section>
  )
}