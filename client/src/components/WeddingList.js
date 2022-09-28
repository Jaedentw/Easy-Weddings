import React from "react";
import WeddingListItem from "./partials/WeddingListItem";
import "../styles/WeddingList.css"
import Wedding from "./Wedding";
import { getUserWeddings, getUserWedding } from "../helpers/selectors";

export default function WeddingList(props) {
    
  let userWeddings = getUserWeddings(props.state, props.user.id);

  let mappedWeddings = userWeddings.map((w) => {
    return (
      <WeddingListItem
        key={w.id}
        date={w.date}
        name={w.name}
        image_url={w.image_url}
        onClick={props.setWedding}
        wedding={props.state.wedding}
      />
    )
  })

  function renderWeddings(state) {
    if(!state.wedding) {
      return mappedWeddings;
    } else {
      let wedding = getUserWedding(state, userWeddings);
      console.log(wedding)
      return <Wedding
        
      />
    }
  }

  return (
    <div class="wedding_list_container">
      <h1 class="wedding-header">Your Weddings</h1>
      <div class="wedding_list_items">
        {renderWeddings(props.state)}
      </div>
    </div>
  )
}