import React from "react";
import VendorsPage from "../vendors_page/VendorsPage";
//import ToDoList from "./ToDoList";
import "../../styles/Wedding.css"

export default function Wedding(props) {

  const state = props.state;

  return (
    <div>
      <div class="upper_wedding">
        <div>
          <img class="page_image" src={state.wedding.image_url} alt="wedding"></img>
        </div>
        <div class="wedding_info">

        </div>
      </div>
      <div class="lower_wedding">
        <div class="todo">
          {/* <ToDoList
            state={props.state}
          /> */}
        </div>
        <div class="vendor_set">
          <VendorsPage
            state={state}
            setFilter={props.setFilter}
          />
        </div>
      </div>
    </div>
  )
}