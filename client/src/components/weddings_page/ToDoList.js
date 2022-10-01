import React from "react";
import ToDo from "./ToDo";
import { getWeddingToDos } from "../../helpers/WeddingsPageHelpers";

export default function ToDoList(props) {

  let toDos = getWeddingToDos(props.state, props.state.wedding.id)

  let mapped = toDos.map((t) => {
    return (
      <ToDo
        title={t.title}
      />
    )
  })

  return (
    <div>
      {mapped}
    </div>
  )
}