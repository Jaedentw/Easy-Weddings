import React from 'react';
import "../styles/nav.css"
import "../styles/Application.css";
import AboutPage from './AboutPage';
import Nav from './partials/Nav';
import useApplicationData from "../hooks/useApplicationData";
import UserSignUp from './partials/UserSignUp';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import VendorsPage from './vendors_page/VendorsPage';
import WeddingList from './weddings_page/WeddingsPage'

//import {getUserWeddings} from "../helpers/selectors"

export default function Application(props) {

  const {
    state,
    setTab,
    setFilter,
    setUser,
    setWedding,
    logout
  } = useApplicationData();

  //let userWeddings = getUserWeddings(state, user_id);
  //let listings = getFilteredListings(state, user_id);


  return (

    <main class="main">
      <Nav
        selected={state.tab}
        setTab={setTab}
        user={state.user}
        logout={logout}
      />
      <img
        class="application-image"
        src="https://thumbs.dreamstime.com/b/banner-background-many-fake-white-roses-top-view-soft-focus-219199318.jpg"
        alt="White Roses" />
      <>
      
      <Routes >
          <Route path="/" element={<AboutPage />} />
          <Route path="/register" element={<UserSignUp />} />
          <Route path="/browse" element={<VendorsPage 
            state={state}
            setFilter={setFilter}
          />} />
          <Route path="/login" element={<Login 
            state={state}
            setUser={setUser}
            setTab={setTab}
          />} />
          <Route path="/weddings" element={<WeddingList
            state={state}
            setWedding={setWedding}
            setFilter={setFilter}
          />}/>
        </Routes>
      </>
    </main>
  );



}