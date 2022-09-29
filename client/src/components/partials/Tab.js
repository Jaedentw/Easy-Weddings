import React from "react";
import "../../styles/nav.css"
import classNames from "classnames";

export default function Tab(props) {

  let tabClasses = classNames("nav-bar-item", {"nav-bar-item-selected": (props.selected === props.name)})

  return (
    <p 
    class={tabClasses}
    onClick={() => props.onClick(props.name)}
    >{props.name}</p>
  )
}