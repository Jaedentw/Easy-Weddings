import {useState} from "react";
import "../../styles/Listings.css"
import DropDown from "./DropDown";
import DropDownMenu from "./DropDownMenu";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function Caterer(props) {

  const navigate = useNavigate()
  const [dropdown, setDropdown] = useState(false);

  function onItemClick() {
    setDropdown(false);
  }

  const caterer = props.caterer

  function onDelete() {
    axios.delete(`/api/caterers/${caterer.id}`, caterer.id)
    .then((response) => {
      console.log("GOOD", response) 
      props.getListingsData();
    })
    .catch((response) => {console.log("BAD", response)})
  }

  function onEdit() {
    props.setListing({'caterer': caterer});
    navigate("/edit-listing")
  }

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={caterer.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{caterer.name}</h1>
            <p>
              <strong>Cuisine: </strong>
               {caterer.cuisine} - 
              <strong> Capacity: </strong> {caterer.capacity} - <a href={caterer.menu_url}>Menu</a>
            </p>
          </div>
          <p>{caterer.description}</p>
          <div>
            {caterer.alternatives !== 'none' && <p><strong>Alternatives: </strong> {caterer.alternatives}</p>}
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong>{caterer.city}</p>
        <div class="upper-business">
          {props.state.tab === "Listings"? 
          <div>
            <i 
              class="fa-sharp fa-solid fa-pen-to-square fa-lg"
              onClick={() => {onEdit()}}
            ></i>
            <i 
              onClick={() => {onDelete()}} 
              class="fa-sharp fa-solid fa-trash-can fa-lg trash"
            ></i>
          </div>
         :  
         (props.state.user.id &&         
          <DropDown
            isOpen={dropdown}
            onChange={setDropdown}
          >
            <DropDownMenu
              listing_type="caterers"
              listing={caterer}
              state={props.state}
              onItemClick={onItemClick}
            />
          </DropDown>
          )}
        </div>
      </div>
    </section>
  )
}

