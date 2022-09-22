import React from 'react'
import BusinessListItem from "./BusinessListItem"

export default function BusinessList(props) {

  console.log(props.businesses)

  let mappedBuinesses = props.buinesses.map((b) => {
    return (
      <BusinessListItem
        key={b.id}
        name={b.name}
        profession={b.profession}
        description={b.description}
        city={b.city}
      />
    )
  })



  return (
    <div>
      {mappedBuinesses}
    </div>
  )
}