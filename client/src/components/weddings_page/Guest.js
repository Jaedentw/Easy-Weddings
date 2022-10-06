import { useState } from "react"
import "../../styles/Wedding.css"
import axios from "axios"
import classNames from "classnames"

export default function Guest(props) {

  let [edit, setEdit] = useState(false)
  let [input, setInput] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }

  function onEdit(event) {
    event.stopPropagation();
    setEdit(!edit);
  }

  function onSubmit(update1, update2) {
    props.guest[update1.type] = update1.value;
    if(update2) {
      props.guest[update2.type] = update2.value;
    }
    console.log("guest", props.guest)
    axios.put(`/api/guests/${props.guest.id}`, props.guest)
    .then((response) => {console.log("GOOD", response)})
    .catch((response) => {console.log("BAD", response)})
    props.getUserData();
    setEdit(null);
  }

  function onDelete() {
    axios.delete(`/api/guests/${props.guest.id}`, props.guest.id)
    .then((response) => {console.log("GOOD", response)})
    .catch((response) => {console.log("BAD", response)})
    props.getUserData();
  }

  let confirmedClasses = classNames( 
    {"green": (props.confirmed === true)}, 
    {"red": (props.confirmed === false)}
  );
  
  function swtichConfirm(confirm) {
    if(confirm === null) {
      onSubmit({type: "confirmed", value: true})
    }
    if(confirm === true) {
      onSubmit({type: "confirmed", value: false})
    }
    if(confirm === false) {
      onSubmit({type: "confirmed", value: null})
    }
  }

  return(
    <div class="to_do_container">
      <span class="to_do">
        <div>
          <i 
            class={`fa-regular fa-circle ${confirmedClasses || "yellow"}`}
            onClick={() => {swtichConfirm(props.confirmed)}}
          ></i>
        </div>
      {edit === true? 
        <div>
          <input 
            name="guest_name" 
            value={input.guest_name || props.name || ""}
            onChange={handleChange}
            placeholder={props.name || ""}
          ></input>
          <input 
            name="plus_one" 
            value={input.plus_one || props.plus_one || ""}
            onChange={handleChange}
            placeholder={props.plus_one || ""}
          ></input>
          <button 
            class="to_do_btn"
            onClick={() => {onSubmit({type: "name", value: input.guest_name}, {type: "plus_one", value: input.plus_one})}}
          >Save</button>
        </div>
        : 
        <div class="row">
          <p>{props.name} { props.plus_one? ` - ${props.plus_one}` : <i class="fa-sharp fa-solid fa-plus" onClick={() => setEdit(true)}></i>}</p> 
        </div>
        }
        
      </span>
      <span>
        <i onClick={(event) => {onEdit(event)}} class="fa-sharp fa-solid fa-pen-to-square"></i>
        <i onClick={() => {onDelete()}} class="fa-sharp fa-solid fa-trash-can trash"></i>
      </span>
    </div>
  )
}
