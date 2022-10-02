import "../../styles/Wedding.css"

export default function ToDo(props) {


  return(
    <div class="to_do_container">
      <div>
        {props.checked? <i class="fa-regular fa-square-check"></i> : <i class="fa-regular fa-square"></i>}
      </div>
      <p>{props.title}</p>
    </div>
    
  )
}

