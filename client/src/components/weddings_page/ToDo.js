import { useState } from "react"
import "../../styles/Wedding.css"
import axios from "axios"

export default function ToDo(props) {

  let [edit, setEdit] = useState(false)
  let [input, setInput] = useState({to_do_title: props.title});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }

  function onEdit(event) {
    event.stopPropagation();
    setEdit(!edit);
  }

  function onSubmit(type, value) {
    props.toDo[type] = value;
    axios.put(`/api/to_dos/${props.toDo.id}`, props.toDo)
    .then((response) => {console.log("GOOD", response)})
    .catch((response) => {console.log("BAD", response, props.toDo)})
    props.getUserData();
    setEdit(null);
  }

  function onDelete() {
    axios.delete(`/api/to_dos/${props.toDo.id}`, props.toDo.id)
    .then((response) => {console.log("GOOD", response)})
    .catch((response) => {console.log("BAD", response)})
    props.getUserData();
  }

  return(
    <div class="to_do_container">
      <span class="to_do">
        <div>
        {props.checked? <i class="fa-regular fa-square-check" onClick={() => {onSubmit("checked", false)}}></i> : <i class="fa-regular fa-square" onClick={() => {onSubmit("checked", true)}}></i>}
        </div>
        {edit === true? 
        <div class="row">
          <input 
            name="to_do_title" 
            value={input.to_do_title || ""}
            onChange={handleChange}
            placeholder={props.title || ""}
          ></input>
          <button 
            class="to_do_btn"
            onClick={() => {onSubmit("title", input.to_do_title)}}
          >Save</button>
        </div>
        : 
        <p>{props.title}</p>
        }
      </span>

      <span>
        <i onClick={(event) => {onEdit(event)}} class="fa-sharp fa-solid fa-pen-to-square"></i>
        <i onClick={() => {onDelete()}} class="fa-sharp fa-solid fa-trash-can trash"></i>
      </span>

    </div>
    
  )
}