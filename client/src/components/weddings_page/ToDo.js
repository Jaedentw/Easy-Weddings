import {useState} from "react";

export default function ToDo(props) {

  const [checked, setChecked] = useState(false)

  function checker(checked) {
    if(checked) {
      setChecked(false)
    } else {
      setChecked(true)
    }
  }

  return(
    <div class="to_do_container">
      <div
        onClick={checker(checked)}
      >
        {checked? <i class="fa-solid fa-check"></i> : <i class="fa-regular fa-square"></i>}
      </div>
      <p>{props.title}</p>
    </div>
    
  )
}