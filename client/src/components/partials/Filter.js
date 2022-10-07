import React from "react";
import classNames from "classnames";

export default function Filter(props) {


  let tabClasses = classNames("business-btn", {"business-btn-selected": (props.selected === props.name)})

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