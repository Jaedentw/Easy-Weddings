import "../../styles/Wedding.css"

export default function Guest(props) {


  return(
    <div class="guest_container">
      <div>
        <div>
          {props.confirmed? <i class="fa-regular fa-square-check"></i> : <i class="fa-regular fa-square"></i>}
        </div>
        <p>{props.name}</p>
      </div>
      {props.plusOne? <div><i class="fa-solid fa-arrow-turn-down-right"></i>{props.plusOne}</div> : null}
    </div>
    
  )
}
