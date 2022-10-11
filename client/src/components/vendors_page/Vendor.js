import {useState} from "react";
import "../../styles/Listings.css"
import DropDown from "./DropDown";
import DropDownMenu from "./DropDownMenu";
import axios from "axios";
import {useNavigate} from "react-router-dom"


export default function Vendor(props) {

  const navigate = useNavigate()
  const [dropdown, setDropdown] = useState(false);

  function onItemClick() {
    setDropdown(false);
  }

  const vendor = props.vendor

  function onDelete() {
    axios.delete(`/api/vendors/${vendor.id}`, vendor.id)
    .then((response) => {
      console.log("GOOD", response) 
      props.getListingsData();
    })
    .catch((response) => {console.log("BAD", response)})
  }

  function onEdit() {
    props.setListing({'vendor': vendor});
    navigate("/edit-listing")
  }

  return(
    <section class="business-container">
      <div class="upper-business">
        <img
          src={vendor.image_url}
          alt="Business"
          class="business-image" 
        />
        <div class="text scroller">
          <div class="upper-text">
            <h1>{vendor.name}</h1>
            <p>
              <strong>Specialty: </strong> {vendor.specialty} - 
              <strong> Rate per hour: </strong>{vendor.rate_per_hour} - <a href={vendor.website_url}>Website</a></p>
          </div>
          <p>{vendor.description}</p>
          <div>
            <p>{vendor.rates_info}</p>
          </div>
        </div>
      </div>

      <div class="lower-business">
        <p> <strong class="location">Located in:</strong>{vendor.city}</p>
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
         ( props.state.user.id && !props.state.user.is_business &&  
          <DropDown
            isOpen={dropdown}
            onChange={setDropdown}
          >
            <DropDownMenu
              listing_type="vendors"
              listing={vendor}
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