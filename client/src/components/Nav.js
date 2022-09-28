import React from 'react';
import "../styles/nav.css";
import Tab from './partials/Tab';
import { Link } from "react-router-dom";

export default function Nav(props) {



  return (
    <nav class="nav-container">
      <div class="upper-nav">
        <p class="title-font">Easy Weddings</p>



        <div class="nav-log">
          <strong>Signed in as: </strong><span>{props.user.first_name}</span>
        </div>
      </div>


      <div class="nav-bar-container">

        <Link to="/">
          <Tab
            name="About"
            onClick={props.setTab}
            selected={props.selected}
          />
        </Link>
        <Tab
          name="Weddings"
          onClick={props.setTab}
          selected={props.selected}
        />
        <Tab
          name="Your Listings"
          onClick={props.setTab}
          selected={props.selected}
        />
        <Link to="/browse">
          <Tab
            name="Vendors"
            onClick={props.setTab}
            selected={props.selected}
          />
        </Link>
        <Link to="/register">

          <Tab
            name="Register"
            onClick={props.setTab}
            selected={props.selected}

          />
        </Link>


        <Link to="/login">

          <Tab
            name="login"
            onClick={props.setTab}
            selected={props.selected}

          />
        </Link>



      </div>
    </nav>
  );
}