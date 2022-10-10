import React, { useEffect } from 'react';
import "../styles/Nav.css";
import "../styles/Application.css";
import HomePage from './HomePage';
import Nav from './partials/Nav';
import useApplicationData from "../hooks/useApplicationData";
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import VendorsPage from './vendors_page/VendorsPage';
import WeddingsPage from './weddings_page/WeddingsPage';
import CreateWedding from './weddings_page/CreateWedding';
import Regsiter from './partials/Register';
import Listings from './listings_page/Listings';
import CreateListing from './listings_page/CreateListing';

import AboutPage from './AboutPage';

import EditListing from './listings_page/EditListing';


//import {getUserWeddings} from "../helpers/selectors"

export default function Application(props) {

  const location = useLocation();
  console.log('location: ', location.pathname);

  const {
    state,
    setTab,
    setUser,
    setListing,
    setWedding,
    logout,
    getProfile,
    getUserData,
    getListingsData
  } = useApplicationData();


  useEffect(() => {
    getProfile();
  }, []);

  return (

    <main class="main">
      <Nav
        selected={state.tab}
        setTab={setTab}
        user={state.user}
        logout={logout}
      />
      {location.pathname !== '/' &&
        <img
          class="application-image"
          src="https://thumbs.dreamstime.com/b/banner-background-many-fake-white-roses-top-view-soft-focus-219199318.jpg"
          alt="White Roses" />
      }
      <>


        <Routes >
          <Route path="/register" element={<Regsiter />} />
          <Route path="/browse" element={<VendorsPage
            state={state}
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
            getUserData={getUserData}
          />} />
          <Route path="/create-wedding" element={<CreateWedding
            state={state}
            setTab={setTab}
            getUserData={getUserData}
          />} />
          <Route path="/create-listing" element={<CreateListing
            getListingsData={getListingsData}
            state={state}
            setTab={setTab}

          />}/>
          <Route path="/edit-listing" element={<EditListing
            state={state}
          />}/>

          <Route path="/listings" element={<Listings
            state={state}
            setTab={setTab}
            getUserData={getUserData}
            getListingsData={getListingsData}
          />}>
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </>
    </main>
  );



}