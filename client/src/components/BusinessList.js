import React from 'react'
import BusinessListItem from "./BusinessListItem"
import "../styles/BusinessList.css"

export default function BusinessList(props) {

  let mappedBuinesses = props.businesses.map((b) => {
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
          <button>Caterers</button>
          <button>Venues</button>
          <button>Vendors</button>
          <button>Decorators</button>
        </div>
        <div>
          <input></input>
        </div>
      </div>
      
      {mappedBuinesses}
    </div>
  )
}