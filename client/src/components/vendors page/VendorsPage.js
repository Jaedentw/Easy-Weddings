import React from 'react'
import "../../styles/VendorPage.css"
import Filter from './Filter'
import Caterer from './Caterer'
import Vendor from './Vendor'
import Venue from './Venue'
import Decorator from './Decorator'



export default function VendorsPage(props) {


  function mapShit(filter, state) {
    if(filter === "Caterers") {
      return (
        state.caterers.map((c) => {
          return(
            <Caterer 
              key={c.id}
              caterer={c}
            />
          )
        })
      )
    }
    if(filter === "Decorators") {
      return (
        state.decorators.map((c) => {
          return(
            <Decorator 
              key={c.id}
              decorator={c}
            />
          )
        })
      )
    }
    if(filter === "Venues") {
      return (
        state.venues.map((c) => {
          return(
            <Venue 
              key={c.id}
              venue={c}
            />
          )
        })
      )
    }
    if (filter === "Vendors") {
      return (
        state.vendors.map((c) => {
          return(
            <Vendor 
              key={c.id}
              vendor={c}
            />
          )
        })
      )
    }
  }

  let mapped = mapShit(props.state.filter, props.state)

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
        {mapped}
      </div>
    </div>
  )
}