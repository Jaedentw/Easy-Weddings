import React from 'react'
import "../styles/nav.css"
import Tab from './partials/Tab';

export default function Nav(props) {

  return (
    <nav class="nav-container">
      <div class="upper-nav">
        <p class="title-font">Easy Weddings</p>
        <div class="nav-log">
          <strong>Signed in as: </strong><span>Jaeden</span>
        </div>
      </div>
      <div class="nav-bar-container">
        <Tab
          name="About"
          onClick={props.onClick}
          selected={props.selected}
        />
        <Tab 
          name="Weddings"
          onClick={props.onClick}
          selected={props.selected}
        />
        <Tab
          name="Your Listings"
          onClick={props.onClick}
          selected={props.selected}
        />
        <Tab 
          name="Vendors"
          onClick={props.onClick}
          selected={props.selected}
        />
      </div>
    </nav>
  )
}