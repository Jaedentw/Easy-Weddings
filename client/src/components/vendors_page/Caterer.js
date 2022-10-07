import {useState} from "react";
import "../../styles/VendorPageItems.css"
import DropDown from "./DropDown";
import DropDownMenu from "./DropDownMenu";

export default function Caterer(props) {

  const [dropdown, setDropdown] = useState(false);

  function onItemClick() {
    setDropdown(false);
  }

  const caterer = props.caterer

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
          {props.state.tab === "Listings"? <i class="fa-sharp fa-solid fa-pen-to-square fa-lg"></i> : ( props.state.user.id &&         
          <DropDown
            isOpen={dropdown}
            onChange={setDropdown}
          >
            <DropDownMenu
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

