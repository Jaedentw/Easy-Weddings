import React, { Component,useState } from 'react'
import "../../styles/VendorPage.css"
import Filter from '../partials/Filter'
import {mapFilters} from '../../helpers/VendorsPageHelpers'

export default function Listings (props) {

  let newCaterers = props.state.caterers.filter(function(ele){
    return ele.business_id === props.state.user.id;
  })

  let newDecorators = props.state.decorators.filter(function(ele){
    return ele.business_id === props.state.user.id;
  })

  let newVenues = props.state.venues.filter(function(ele){
    return ele.business_id === props.state.user.id;
  })

  let newVendors = props.state.vendors.filter(function(ele){
    return ele.business_id === props.state.user.id;
  })


  const newData = {
    caterers: newCaterers,
    decorators: newDecorators,
    venues: newVenues,
    vendors: newVendors
  }

  console.log('Test filter for specific caterers', newCaterers)
  

  let [search, setSearch] = useState()
  let mapped = mapFilters(props.state.filter, newData, search, props.state.wedding)
  
  return (
    <div class="business-list-container">
      <div class="business-nav-container">
        <div class="business-buttons">
          <Filter
            name="Caterers"
            selected={props.state.filter}
            onClick={props.setFilter}
          />
          <Filter
            name="Decorators"
            selected={props.state.filter}
            onClick={props.setFilter}
          />
          <Filter
            name="Venues"
            selected={props.state.filter}
            onClick={props.setFilter}
          />
          <Filter
            name="Vendors"
            selected={props.state.filter}
            onClick={props.setFilter}
          />
        </div>
        <div>
        <i class="fa-solid fa-magnifying-glass"></i> 
        <input 
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

