import React from "react";
import VendorsPage from "../vendors_page/VendorsPage";
import ToDoList from "./WeddingInfo";
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
        </div>
        <div class="todo">
          <ToDoList
            state={props.state}
          />
        </div>
      </div>
      <div class="lower_wedding">
        <div class="vendor_set">
          <VendorsPage
            state={props.state}
            setFilter={props.setFilter}
          />
        </div>
      </div>
    </div>
  )
}