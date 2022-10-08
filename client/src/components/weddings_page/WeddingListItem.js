import React from "react";
import "../../styles/WeddingListItem.css"

export default function WeddingListItem(props) {

  return (
    <div 
      class={`wedding_container ${!props.state.wedding && 'wli_margins'}`}
      onClick={props.setWedding.name === "setWedding"? () => props.setWedding(props.wedding) : () => props.setWedding("/create-wedding")}
    >
      {props.state.wedding &&       
      <i class="fa-sharp fa-solid fa-pen-to-square fa-lg wedding_edit"/>}
      <img alt="wedding" class="wedding_image" src={props.image_url}/>
      <div class="wedding_text">
        <p>{props.name}</p>
        <p>{props.date}</p>
      </div>
    </div>
  )
}