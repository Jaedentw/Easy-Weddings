import React from 'react'
import BusinessList from './BusinessList'
import useApplicationData from "../hooks/useApplicationData"


export default function Application(props) {
    
  const {state} = useApplicationData();

  return (
    <div>
      <BusinessList
        businesses={state.businesses}
      />
    </div>
  )

}