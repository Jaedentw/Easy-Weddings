import React from "react";
import classNames from "classnames";

export default function Filter(props) {
  let tabClasses = classNames("business-btn", {"business-btn-selected": (props.selected === props.name)})

  return (
    <p 
    class={tabClasses}
    onClick={() => props.onClick(props.name)}
    >{props.name}</p>
  )
}