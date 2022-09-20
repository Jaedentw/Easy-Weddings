import React from 'react'
import BusinessListItem from "./BussinessListItem"



export default function BusinessList(props) {

  let mappedBuinesses = props.buinesses.map((b) => {
    return (
      <BusinessListItem
        key={b.key}
        name={b.name}
        profession={b.profession}
      />
    )
  })



  return (
    <ul>
      {mappedBuinesses}
    </ul>
  )
}