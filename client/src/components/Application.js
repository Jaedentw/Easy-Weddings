import React from 'react';
import "../styles/Application.css";
import AboutPage from './AboutPage';
import Nav from './Nav';
import useApplicationData from "../hooks/useApplicationData";
import UserSignUp from './UserSignUp';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';

import VendorsPage from './vendors page/VendorsPage';

//import {getUserWeddings} from "../helpers/selectors"

export default function Application(props) {

  const {
    state,
    setTab,
    setFilter,
    setUser,
    setWedding
  } = useApplicationData();

  

  //let userWeddings = getUserWeddings(state, user_id);
  //let listings = getFilteredListings(state, user_id);


  return (
  
    <main class="main">


      <Nav
        selected={state.tab}
        setTab={setTab}
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

          <Route path="/browse" element={<VendorsPage 
            state={state}
            caterers={state.caterers}
            setFilter={setFilter}
          />} />


          <Route path="/login" element={<Login 
              state = {state}
              setUser = {setUser}
           />} />
          

        </Routes>
      </>

    </main>
  );



}