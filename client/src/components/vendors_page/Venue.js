import {useState} from "react";
import "../../styles/Listings.css"
import DropDown from "./DropDown";
import DropDownMenu from "./DropDownMenu";
import axios from "axios";
import {useNavigate} from "react-router-dom"


export default function Venue(props) {

  const navigate = useNavigate()
  const [dropdown, setDropdown] = useState(false);

  function onItemClick() {
    setDropdown(false);
  }

  const venue = props.venue

  function onDelete() {
    axios.delete(`/api/venues/${venue.id}`, venue.id)
    .then((response) => {
      console.log("GOOD", response) 
      props.getListingsData();
    })
    .catch((response) => {console.log("BAD", response)})
  }

  function onEdit() {
    props.setListing({"venue":venue});
    navigate("/edit-listing")
  }

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={venue.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{venue.name}</h1>
            <p><strong>Capacity: </strong>{venue.capacity} - <strong>Theme: </strong>{venue.theme} - <a href={venue.website_url}>Website</a></p>
          </div>
          <p>{venue.description}</p>
          <div>
            {venue.features !== 'none' && <p><strong>Features: </strong>{venue.features}</p>}
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong>{venue.city}</p>
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
        ( props.state.user.id &&         
          <DropDown
            isOpen={dropdown}
            onChange={setDropdown}
          >
            <DropDownMenu
              listing_type="venues"
              listing={venue}
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