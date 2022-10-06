import React, { useEffect } from 'react';
import "../styles/nav.css"
import "../styles/Application.css";
import AboutPage from './AboutPage';
import Nav from './partials/Nav';
import useApplicationData from "../hooks/useApplicationData";
import UserSignUp from './partials/UserSignUp';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import VendorsPage from './vendors_page/VendorsPage';
import WeddingsPage from './weddings_page/WeddingsPage'
import CreateWedding from './weddings_page/CreateWedding';

//import {getUserWeddings} from "../helpers/selectors"

export default function Application(props) {

  const {
    state,
    setTab,
    setFilter,
    setUser,
    setWedding,
    logout,
    getProfile,
    getUserData
  } = useApplicationData();


  useEffect(()=>{
    getProfile()
  },[])

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
            getUserData={getUserData}
            setUser={setUser}
            setTab={setTab}
          />} />
          <Route path="/weddings" element={<WeddingsPage
            state={state}
            setWedding={setWedding}
            setFilter={setFilter}
            getUserData={getUserData}
          />}/>
          <Route path="/create-wedding" element={<CreateWedding
            state={state}
            setTab={setTab}
            getUserData={getUserData}
          />}/>
        </Routes>
      </>
    </main>
  );



}