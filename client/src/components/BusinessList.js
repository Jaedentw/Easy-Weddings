import React from 'react'
import BusinessListItem from "./BusinessListItem"

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
    <div>
      {mappedBuinesses}
    </div>
  )
}