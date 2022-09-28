import React from 'react'
import "../../styles/VendorPage.css"
import Filter from './Filter'
import Caterer from './Caterer'

export default function VendorsPage(props) {

  const mappedCatering = props.caterers.map((c) => {
    return(
      <Caterer 
        key={c.id}
        caterer={c}
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
        {mappedCatering}
      </div>
    </div>
  )
}