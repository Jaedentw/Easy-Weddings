import React from 'react'
import "../styles/VendorsPage.css"
import BusinessList from './BusinessList'
import WeddingListItem from './partials/WeddingListItem'
import AboutPage from './AboutPage'
import Nav from './Nav';
import useApplicationData from "../hooks/useApplicationData"
//import {getUserWeddings} from "../helpers/selectors"



export default function Application(props) {
    
  const {
    state,
    setTab
  } = useApplicationData();

  //let userWeddings = getUserWeddings();
  
  function renderTag(state) {
    if(state.tab === "About") {
      return <AboutPage/>
    }
    if(state.tab === "Weddings") {
      return (
      <WeddingListItem
        name="a wedding"
        date="09-26-2023"
        image="https://www.weddingbee.com/wp-content/uploads/2018/07/love-377263.jpg"
        //weddings={userWeddings}
      />
      )
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