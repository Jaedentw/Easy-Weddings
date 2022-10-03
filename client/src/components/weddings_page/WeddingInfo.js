import {useState} from "react";
import {  mappedWeddingToDos, mappedWeddingGuests } from "../../helpers/WeddingsPageHelpers";
import Filter from "../partials/Filter";
import "../../styles/Wedding.css"

export default function WeddingInfo(props) {

  const [filter, setFilter] = useState("To Do")


  let mappedTDU = mappedWeddingToDos(props.state, false)
  let mappedTDC= mappedWeddingToDos(props.state, true)
  let mappedGN= mappedWeddingGuests(props.state, null)
  let mappedGF= mappedWeddingGuests(props.state, false)
  let mappedGT= mappedWeddingGuests(props.state, true)
  

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
          <p class="info_label"><strong>In Progress</strong></p>
          {mappedTDU}
          <p class="info_label"><strong>Completed!</strong></p>
          {mappedTDC}
        </div>
      :
        <div class="info_body" >
          <p class="info_label"><strong>Pending</strong></p>
          {mappedGN}
          <p class="info_label"><strong>Confirmed Coming!</strong></p>
          {mappedGT}
          <p class="info_label"><strong>Can't Come :(</strong></p>
          {mappedGF}
        </div>
      }

    </div>
  )
}