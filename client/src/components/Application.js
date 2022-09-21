import React from 'react'
import "../styles/nav.css"


export default function Application(props) {
    
  //const allBuinesses = getAllBusinesses()

  return (
    <nav class="nav-container">
      <div class="upper-nav">
        <p class="title-font">Easy Weddings</p>
      </div>
      <div class="nav-bar-container">
        <p class="nav-bar-item">Item 1</p>
        <p class="nav-bar-item">Item 2</p>
      </div>
    </nav>
  )

}