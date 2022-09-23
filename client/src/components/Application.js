import React from 'react'
import "../styles/VendorsPage.css"
import BusinessList from './BusinessList'
import WeddingsPage from './WeddingsPage'
import AboutPage from './AboutPage'
import useApplicationData from "../hooks/useApplicationData"
import Nav from './Nav';


export default function Application(props) {
    
  const {
    state,
    setTab
  } = useApplicationData();
  
  function renderTag(state) {
    if(state.tag === "About") {
      return <AboutPage />
    }
    if(state.tab === "Weddings") {
      return <WeddingsPage />
    }
    if(state.tab === "Vendors") {
      return(
      <BusinessList 
        businesses={state.businesses}
      />
      )
    }
  }

  return (
    <main class="main">
      <Nav
        selected={state.tab}
        onClick={setTab}
      />
      <img 
      class="application-image"
      src="https://thumbs.dreamstime.com/b/banner-background-many-fake-white-roses-top-view-soft-focus-219199318.jpg"
      alt="Flowers"/>
      {renderTag(state)}
    </main>
  )

}