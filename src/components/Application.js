import React from 'react'
import BusinessList from "./BusinessList";
import getAllBusinesses from "../helpers/selectors.js"

export default function Application(props) {
    
  const allBuinesses = getAllBusinesses()

  return (
    <main>
      <BusinessList
        businesses={allBuinesses}
      />
    </main>
  )

}