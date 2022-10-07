import React from "react";
import "../../styles/VendorPageItems.css"
import { getUserWeddings } from "../../helpers/WeddingsPageHelpers";
import axios from "axios";

export default function DropDownMenu(props) {

  let userWeddings = [];
  if(props.state.user) {
    userWeddings = getUserWeddings(props.state, props.state.user.id);
  }

  function addToWedding(listing_id, wedding, type, event) {

    event.stopPropagation();
    props.onItemClick();

    if(!wedding[type]) {
      wedding[type] = [];
    }

    if(!wedding[type].includes(listing_id)) {
      wedding[type].push(listing_id)
    }
    console.log("addtowedding id", wedding.id)
    axios.put(`api/weddings/${wedding.id}`, wedding)
      .then((response) => {
        console.log("response", response)
      })
  
      .catch((res) =>
        console.log('Error adding listing to wedding', res.response)
      );
  }

  function DropItem(props) {
    return(
      <div
        onClick={(event) => {props.onClick(props.listing_id, props.wedding, props.listing_type, event); }}
        class="dropdown_item"
      >{props.name}</div>
    )
  }

  let mapped = userWeddings.map((n) => {
    return(
      <DropItem
      key={n.id}
      name={n.name}
      wedding={n}
      listing_type={props.state.filter.toLowerCase()}
      listing_id={props.listing.id}
      onClick={addToWedding}
    />
    )
  })

  return (
    <div class="dropdown">
      {mapped}
    </div>
  )
}

