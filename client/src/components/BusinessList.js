import React from 'react'
import BusinessListItem from "./partials/BusinessListItem"
import "../styles/BusinessList.css"
import Filter from './partials/Filter'
import useVendorData from "../hooks/useVendorData"

export default function BusinessList(props) {


  const {state, setFilter} = useVendorData()

  let mappedBuinesses = state.businesses.map((b) => {
    return (
      <BusinessListItem
        key={b.id}
        image_url={b.image_url}
        name={b.name}
        profession={b.profession}
        description={b.description}
        city={b.city}
      />
    )
  })

  return (
    <div class="business-list-container">
      <div class="business-nav-container">
        <div class="business-buttons">
          <Filter
            name="Favorites"
            selected={state.filter}
            onClick={setFilter}
          />
          <Filter
            name="Caterers"
            selected={state.filter}
            onClick={setFilter}
          />
          <Filter
            name="Decorators"
            selected={state.filter}
            onClick={setFilter}
          />
          <Filter
            name="Venues"
            selected={state.filter}
            onClick={setFilter}
          />
          <Filter
            name="Vendors"
            selected={state.filter}
            onClick={setFilter}
          />
        </div>
        <div>
        <i class="fa-solid fa-magnifying-glass"></i> <input 
        class="business-search"
        placeholder="Search"
        ></input>
        </div>
      </div>
      <div>
        {mappedBuinesses}
      </div>
    </div>
  )
}