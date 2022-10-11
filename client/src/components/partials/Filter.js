import React from "react";
import classNames from "classnames";

export default function Filter(props) {


  let tabClasses = classNames("create-listing-btn", {"create-listing-btn-active": (props.selected === props.name)})

  return (
    <p 
    class={tabClasses}
    onClick={() => {
      props.onClick(props.name)
      if(props.setSearchFilter) {
        props.setSearchFilter('Name');
      }
    }}
    >{props.name}</p>
  )
}