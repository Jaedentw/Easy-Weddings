import React from "react";
import "../../styles/WeddingListItem.css"

export default function WeddingListItem(props) {


  return (
    <div class="wedding_container"
    onClick={() => props.onClick(props.key)}
    >
      <img alt="wedding" class="wedding_image" src={props.image_url}/>
      <div class="wedding_text">
        <p>{props.name}</p>
        <p>{props.date}</p>
      </div>
    </div>
  )
}