import {useState} from "react";
import {  mappedWeddingToDos, mappedWeddingGuests } from "../../helpers/WeddingsPageHelpers";
import Filter from "../partials/Filter";
import "../../styles/Wedding.css"
import axios from "axios";

export default function WeddingInfo(props) {

  const [filter, setFilter] = useState("To Do")


  let mappedTDU = mappedWeddingToDos(props.state, false, props.getUserData)
  let mappedTDC= mappedWeddingToDos(props.state, true, props.getUserData)
  let mappedGN= mappedWeddingGuests(props.state, null, props.getUserData)
  let mappedGF= mappedWeddingGuests(props.state, false, props.getUserData)
  let mappedGT= mappedWeddingGuests(props.state, true, props.getUserData)

  const toDoData = {
    wedding_id: props.state.wedding.id,
    title: "",
    checked: false
  }

  function newToDo() {

    axios.post("/api/to_dos/", toDoData)
      .then((res) => {
        console.log("GOOD", res)
        props.getUserData()
      })
      .catch((res) =>{
        console.log("BAD", res)
      })
  }

  const guestData = {
    wedding_id: props.state.wedding.id,
    name: "",
    value: 1,
    plus_one: ""
  }

  function newGuest() {
    axios.post("/api/guests/", guestData)
    .then((res) => {
      console.log("GOOD", res)
      props.getUserData()
    })
    .catch((res) =>{
      console.log("BAD", res)
    })
  }


  return (
    <div class="info_container">
      <div class="info_buttons">
        <Filter
          name="To Do"
          selected={filter}
          onClick={setFilter}
        />
        <Filter
          name="Guests"
          selected={filter}
          onClick={setFilter}
        />
      </div>
      {filter === "To Do"? 
        <div class="info_body">
          <div class="info_upper"><p class="info_label"><strong>In Progress</strong></p>
          <button 
            class="info_btn"
            onClick={() => {newToDo()}}
          >new</button></div>
          {mappedTDU}
          <p class="info_label"><strong>Completed!</strong></p>
          {mappedTDC}
        </div>
      :
        <div class="info_body" >
          <div class="info_upper"><p class="info_label"><strong>Pending</strong></p>
          <button 
            class="info_btn"
            onClick={() => {newGuest()}}
          >new</button></div>
          {mappedGN}
          <p class="info_label"><strong>Confirmed</strong></p>
          {mappedGT}
          <p class="info_label"><strong>Declined</strong></p>
          {mappedGF}
        </div>
      }

    </div>
  )
}