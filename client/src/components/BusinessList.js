import React from 'react'
import BusinessListItem from "./partials/BusinessListItem"
import "../styles/BusinessList.css"
import Filter from './partials/Filter'

export default function BusinessList(props) {


  let mappedBuinesses = props.state.businesses.map((b) => {
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
            selected={props.state.filter}
            onClick={props.setFilter}
          />
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