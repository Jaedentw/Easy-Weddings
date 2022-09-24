import React from "react";
import WeddingListItem from "./partials/WeddingListItem";

export default function WeddingsList(props) {
  
  let mappedWeddings = props.weddings.map((w) => {
    return (
      <WeddingListItem
        date={w.date}
        name={w.name}
        image={w.image_url}
      />
    )
  })


  return (
    <div>
      {mappedWeddings}
    </div>
  )
}