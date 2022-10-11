import React, { useState, useEffect } from 'react'
import "../../styles/VendorPage.css"
import Filter from '../partials/Filter'
import {mapFilters} from '../../helpers/VendorsPageHelpers'
import { useNavigate } from 'react-router-dom'

export default function Listings (props) {

  let [filter, setFilter] = useState("Caterers");
  let [search, setSearch] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    props.setTab("Listings");
  }, [props.state.tab])

  // Maps caterers,decorators,venues, and vendors with specific userID matching the current signed in user's id
  let newCaterers = props.state.caterers.filter(function(ele){
    return ele.user_id === props.state.user.id;
  })
  let newDecorators = props.state.decorators.filter(function(ele){
    return ele.user_id === props.state.user.id;
  })
  let newVenues = props.state.venues.filter(function(ele){
    return ele.user_id === props.state.user.id;
  })
  let newVendors = props.state.vendors.filter(function(ele){
    return ele.user_id === props.state.user.id;
  })

  const newData = {
    tab: props.state.tab,
    caterers: newCaterers,
    decorators: newDecorators,
    venues: newVenues,
    vendors: newVendors,
    user: props.state.user
  }
  let mapped = mapFilters(filter, newData, search, props.state.wedding, "name", props.getListingsData, props.setListing);

  return (
    <div class="business-list-container">
      <div class="business-nav-container">
        <div class="title-font bottom-dots">Your Listings</div>
        <div class="business-buttons create-listing-buttons">
          <div class="listing-buttons">
            <Filter
              name="Caterers"
              selected={filter}
              onClick={setFilter}
            />
            <Filter
              name="Decorators"
              selected={filter}
              onClick={setFilter}
            />
            <Filter
              name="Venues"
              selected={filter}
              onClick={setFilter}
            />
            <Filter
              name="Vendors"
              selected={filter}
              onClick={setFilter}
            />
          </div>

          <input 
            type="submit" 
            value="Create new" 
            onClick={()=>navigate('/create-listing')}
            class="listing-btn"
          ></input>
        </div>
        <div>
        <i class="fa-solid fa-magnifying-glass"></i> <input 
          class="business-search"
          placeholder="Search"
          onInput={(event) => {setSearch(event.target.value);}}
        ></input>
        </div>
      </div>
      <div>
        {mapped}
      </div>
    </div>
  )
}

