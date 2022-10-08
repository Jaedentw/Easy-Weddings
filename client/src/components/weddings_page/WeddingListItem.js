import {useState} from "react";
import "../../styles/WeddingListItem.css"
import axios from "axios"

export default function WeddingListItem(props) {

  let [edit, setEdit] = useState(false)
  let [input, setInput] = useState({wedding_name: (props.name || ""), wedding_date: (props.date || ""), image_url: (props.image_url || "")});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }

  function updateWedding() {
    setEdit(false);
    props.wedding.name = input.wedding_name
    props.wedding.date = input.wedding_date
    if(input.image_url === "") {
      props.wedding.image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/White_flag_of_surrender.svg/800px-White_flag_of_surrender.svg.png';
    } else {
      props.wedding.image_url = input.image_url
    }
    axios.put(`/api/weddings/${props.wedding.id}`, props.wedding)
    .then((response) => {console.log("GOOD", response)})
    .catch((response) => {console.log("BAD", response)})
    props.getUserData();
    setEdit(false);
  }
  return (
    <div 
      class={`wedding_container ${!props.state.wedding && 'wli_margins'}`}
      onClick={props.setWedding.name === "setWedding"? () => props.setWedding(props.wedding) : () => props.setWedding("/create-wedding")}
    >
      {props.state.wedding &&       
      <i 
      class="fa-sharp fa-solid fa-pen-to-square fa-lg wedding_edit_icon"
      onClick={() => {setEdit(true)}}
      />}
      <img alt="wedding" class="wedding_image" src={props.image_url}/>
      {edit? 
      <div class="wedding_edit">
        <label>Image: <input 
          name="image_url" 
          value={input.image_url}
          onChange={handleChange}
          placeholder="Image URL"
        ></input></label>
        <label>Title: <input 
          name="wedding_name" 
          value={input.wedding_name || ""}
          onChange={handleChange}
          placeholder={props.wedding_name|| ""}
        ></input></label>
        <label>Date: <input 
          name="wedding_date" 
          value={input.wedding_date || ""}
          onChange={handleChange}
          placeholder={props.wedding_date|| ""}
        ></input></label>
        <button 
          class="edit_btn"
          onClick={() => updateWedding()}
        >Save</button>
      </div>
      : 
      <div class="wedding_text">
        <p>{props.name}</p>
        <p>{props.date}</p>
      </div>
      }

    </div>
  )
}