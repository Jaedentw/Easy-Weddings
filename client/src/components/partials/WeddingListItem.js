import React from "react";
import "../../styles/WeddingListItem.css"

export default function WeddingListItem(props) {


  return (
    <div 
    style={{backgroundImage: props.image}}
    >
      {props.name}
      {props.date}
    </div>
  )
}