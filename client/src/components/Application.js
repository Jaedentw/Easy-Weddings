import React from 'react'
import "../styles/Application.css"
import BusinessList from './BusinessList'
import AboutPage from './AboutPage'
import Nav from './Nav';
import useApplicationData from "../hooks/useApplicationData"
import UserSignUp from './UserSignUp'
import WeddingList from './WeddingList'
//import {getUserWeddings} from "../helpers/selectors"



export default function Application(props) {
    
  const {
    state,
    setTab,
  } = useApplicationData();
  
  function renderTab(state) {
    if(state.tab === "About") {
      return <AboutPage/>
    }
    if(state.tab === "Weddings") {
      return (
        <WeddingList/>
      )
    }
    if(state.tab === "Vendors") {
      return(
      <BusinessList/>
      )
    }
    if(state.tab === "Your Listings") {
      return (
        <UserSignUp/>
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
      {renderTab(state)}
    </main>
  )

}