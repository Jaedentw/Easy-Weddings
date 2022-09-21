import React from 'react'
import "../styles/BusinessListItem.css"


export default function Application(props) {
    
  //const allBuinesses = getAllBusinesses()

  return (
    <section class="business-container">
      <div class="upper-business">
        <img
          src="https://www.thespruce.com/thmb/mtS-MppBCuvkOPiZdhpfVx8r7RA=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pictures-of-red-flowers-4061761-hero-6a032be909a74ac3bf4009232c295845.jpg"
          alt="Business"
          class="business-image" 
        />
        <div class="text">
          <div class="upper-text">
            <p>Name</p>
            <p>Profession</p>
          </div>
          <p>Description</p>
        </div>
      </div>
      <div class="lower-business">
        <i class="fa-solid fa-plus fa-lg"></i>
      </div>
    </section>
  )

}