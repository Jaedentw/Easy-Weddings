import "../../styles/Wedding.css"

export default function Guest(props) {

  return(
    <div class="to_do_container">
      <span class="to_do">
        <p>{props.name}</p>{props.plus_one && <p>: {props.plus_one}</p>}
      </span>
      <i class="fa-solid fa-trash-can trash"></i>
    </div>
  )
}
