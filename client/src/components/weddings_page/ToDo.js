import "../../styles/Wedding.css"

export default function ToDo(props) {


  return(
    <div class="to_do_container">
      <span class="to_do">
        <div>
          {props.checked? <i class="fa-regular fa-square-check"></i> : <i class="fa-regular fa-square"></i>}
        </div>
        <p>{props.title}</p>
      </span>

      <span>
        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
        <i class="fa-sharp fa-solid fa-trash-can trash"></i>
      </span>

    </div>
    
  )
}

