import React from 'react'
import "../styles/Application.css"
import BusinessList from './BusinessList'
import useApplicationData from "../hooks/useApplicationData"
import Nav from './Nav';


export default function Application(props) {
    
  const {state} = useApplicationData();

  return (
    <main class="main">
      <Nav/>
      
      <BusinessList
        businesses={state.businesses}
      />
    
    </main>
  )

}