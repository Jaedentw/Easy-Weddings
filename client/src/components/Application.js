import React from 'react'
import BusinessList from './BusinessList'
import useApplicationData from "../hooks/useApplicationData"
import Nav from './Nav';


export default function Application(props) {
    
  const {state} = useApplicationData();

  return (
    <main>
      <Nav/>
      <div>
        <BusinessList
          businesses={state.businesses}
        />
      </div>
    </main>
  )

}