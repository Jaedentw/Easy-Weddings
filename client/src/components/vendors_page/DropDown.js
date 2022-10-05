import {useState} from "react";

export default function DropDown(props) {

  const [open, setOpen] = useState(false)

  function handleClick(event, open){
    event.stopPropagation();
    setOpen(!open);
  }


  return (
    <div>
      <i 
        class="fa-sharp fa-solid fa-plus fa-lg"
        onClick={(event) => {handleClick(event, open)}}
      ></i>

      {open && props.children}
    </div>
  )
}