import React from 'react'
//import BusinessList from "./BusinessList";
import BusinessListItem from "./BusinessListItem.js";
//import getAllBusinesses from "../helpers/selectors.js"

export default function Application(props) {
    
  //const allBuinesses = getAllBusinesses()

  return (
    <main>
      <BusinessListItem
        name="Business"
        profession="Profession"
      />
    </main>
  )

}