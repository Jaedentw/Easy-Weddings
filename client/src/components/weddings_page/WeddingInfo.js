import React from "react";
import ToDo from "./ToDo";
import { getWeddingToDos } from "../../helpers/WeddingsPageHelpers";

export default function WeddingInfo(props) {

  let toDos = getWeddingToDos(props.state, props.state.wedding.id)

  let mapped = toDos.map((t) => {
    return (
      <ToDo
        key={t.id}
        title={t.title}
        checked={t.checked}
      />
    )
  })

  return (
    <div>
      {mapped}
    </div>
  )
}