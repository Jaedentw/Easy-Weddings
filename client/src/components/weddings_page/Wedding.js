import React from "react";
import VendorsPage from "../vendors_page/VendorsPage";
import WeddingInfo from "./WeddingInfo";
import "../../styles/Wedding.css"
import "../../styles/WeddingListItem.css"
import WeddingListItem from "./WeddingListItem";

export default function Wedding(props) {

  const wedding = props.state.wedding;

  return (
    <div>
      <div class="upper_wedding">
        <div>
          <WeddingListItem
            key={wedding.id}
            wedding={wedding}
            image_url={wedding.image_url}
            name={wedding.name}
            date={wedding.date}
            setWedding={props.setWedding}
          />
          <div class="info_box">
            <span><strong>Budget: </strong> {wedding.budget}</span>
            <span><strong>Guest Count: </strong> {wedding.guest_count}</span>
          </div>
        </div>
        <div class="weddingInfo">
          <WeddingInfo
            state={props.state}
          />
        </div>
      </div>
      <div class="lower_wedding">
        <h2 class="wedding_header upper_wedding" >Your Saved Vendors</h2>
        <VendorsPage
          state={props.state}
          setFilter={props.setFilter}
        />

      </div>
    </div>
  )
}