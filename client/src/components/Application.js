import React from 'react'
import "../styles/VendorsPage.css"
import BusinessList from './partials/BusinessList'
import useApplicationData from "../hooks/useApplicationData"
import Nav from './partials/Nav';


export default function Application(props) {
    
  const {state} = useApplicationData();

  return (
    <main class="main">
      <Nav/>
      <img 
      class="application-image"
      src="https://thumbs.dreamstime.com/b/banner-background-many-fake-white-roses-top-view-soft-focus-219199318.jpg"
      alt="Flowers"/>
      <BusinessList
        businesses={state.businesses}
      />
    
    </main>
  )

}