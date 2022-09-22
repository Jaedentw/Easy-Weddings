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
            <h1>Kosta's Flowers</h1>
            <p>Florist</p>
          </div>
          <p>We have every flower you can think of and more!</p>
        </div>
      </div>
      <div class="lower-business">

        <p>Located in: Ontario</p>

        <div class="upper-business">
          <i class="fa-solid fa-plus fa-lg fa-sharp"></i>
          <i class="fa-solid fa-heart fa-lg"></i>
        </div>

      </div>
    </section>
  )

}