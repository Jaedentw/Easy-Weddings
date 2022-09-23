import React from 'react'
import "../../styles/nav.css"

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
        <p class="nav-bar-item">About</p>
        <p class="nav-bar-item">Weddings</p>
        <p class="nav-bar-item">Vendors</p>
      </div>
    </nav>
  )
}