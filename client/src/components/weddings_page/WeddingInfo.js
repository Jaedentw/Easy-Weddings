import {useState} from "react";
import { getWeddingToDosChecked, getWeddingToDosUnchecked, mappedWeddingFilters } from "../../helpers/WeddingsPageHelpers";
import Filter from "../partials/Filter";
import "../../styles/Wedding.css"

export default function WeddingInfo(props) {

  const [filter, setFilter] = useState("To Do")


  let toDoUn = getWeddingToDosUnchecked(props.state, props.state.wedding.id)
  let toDoCh = getWeddingToDosChecked(props.state, props.state.wedding.id)
  let mappedUn = mappedWeddingFilters(filter, toDoUn, [])
  let mappedCh = mappedWeddingFilters(filter, toDoCh, [])
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
          {mappedUn}
          <p class="info_label"><strong>Completed!</strong></p>
          {mappedCh}
        </div>
      :
        <div class="info_body" ></div>
      }

    </div>
  )
}