import React from 'react';
import "../styles/VendorsPage.css";
import BusinessList from './BusinessList';
import WeddingListItem from './partials/WeddingListItem';
import AboutPage from './AboutPage';
import Nav from './Nav';
import useApplicationData from "../hooks/useApplicationData";
import UserSignUp from './UserSignUp';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
//import {getUserWeddings} from "../helpers/selectors"



export default function Application(props) {

  const {
    state,
    setTab,
    setFilter,
    setUser
  } = useApplicationData();


  console.log('This is the user object after logging in: ',state.user)

  //let userWeddings = getUserWeddings(state, user_id);
  //let listings = getFilteredListings(state, user_id);




  return (
  
    <main class="main">


      <Nav
        selected={state.tab}
        onClick={setTab}
        user={state.user}
      />
      <img
        class="application-image"
        src="https://thumbs.dreamstime.com/b/banner-background-many-fake-white-roses-top-view-soft-focus-219199318.jpg"
        alt="Flowers" />


      <>
        
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/register" element={<UserSignUp />} />
          <Route path="/browse" element={<BusinessList />} />


          
          <Route path="/login" element={<Login 
              state = {state}
              setUser = {setUser}
           />} />
          
        </Routes>
      </>

    </main>
  );



}