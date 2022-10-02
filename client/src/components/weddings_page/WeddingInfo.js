import {useState} from "react";
import { getWeddingToDos, mappedWeddingFilters } from "../../helpers/WeddingsPageHelpers";
import Filter from "../partials/Filter";
import "../../styles/Wedding.css"

export default function WeddingInfo(props) {

  const [filter, setFilter] = useState("To Do")


  let toDos = getWeddingToDos(props.state, props.state.wedding.id)

  let mapped = mappedWeddingFilters(filter, toDos, [])

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
      <div class="info_body">
        {mapped}
      </div>
    </div>
  )
}