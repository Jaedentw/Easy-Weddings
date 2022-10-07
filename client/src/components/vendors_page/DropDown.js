import React from "react";

export default function DropDown(props) {

  function handleClick(event, open){
    event.stopPropagation();
    props.onChange(!open)

  }


  return (
    <div>
      <i 
        class="fa-sharp fa-solid fa-plus fa-lg"
        onClick={(event) => {handleClick(event, props.isOpen)}}
      ></i>

      {props.isOpen && props.children}
    </div>
  )
}