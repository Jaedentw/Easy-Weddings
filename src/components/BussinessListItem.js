import React from 'react'
//import "../styles/BusinessListItem.scss"
//import classNames from "classnames";

export default function BusinessListItem(props) {

  return (
    <li>
      <h1>${props.name}</h1>
      <h2>${props.profession}</h2>
    </li>
  )
}