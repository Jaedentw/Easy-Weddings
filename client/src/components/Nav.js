import React from 'react';
import "../styles/nav.css";
import Tab from './partials/Tab';
import { NavLink } from "react-router-dom";

export default function Nav(props) {

  let isLoggedIn = false;

  if (props.user == null) {
    isLoggedIn = false;
  }
  else {
    isLoggedIn = true;
  }


  return (
    <nav class="nav-container">
      <div class="upper-nav">
        <a href="/" class="title-font">Easy Weddings</a>

        {isLoggedIn &&

          <div class="nav-log">
            <strong>Signed in as: </strong><span>{props.user.first_name}</span>
            <div>
              <button onClick={props.logout} value="Logout">Logout</button>
            </div>
          </div>
        }
      </div>


      <div class="nav-bar-container">

        <NavLink to="/" class="blue-line-be-gone">
          <Tab
            name="About"
            onClick={props.setTab}
            selected={props.selected}
          />
        </NavLink>
        {isLoggedIn &&
          <NavLink to="/weddings" class="blue-line-be-gone">
            <Tab
              name="Weddings"
              onClick={props.setTab}
              selected={props.selected}
            />
          </NavLink>
        }
        {!isLoggedIn &&
          <NavLink to="/login" class="blue-line-be-gone">
            <Tab
              name="Weddings"
              onClick={props.setTab}
            />
          </NavLink>
        }
        <Tab
          name="Your Listings"
          onClick={props.setTab}
          selected={props.selected}
        />

        <NavLink to="/browse" class="blue-line-be-gone">
          <Tab
            name="Vendors"
            onClick={props.setTab}
            selected={props.selected}
          />
        </NavLink>
        {!isLoggedIn &&
          <NavLink to="/register" class="blue-line-be-gone">
            <Tab
              name="Register"
              onClick={props.setTab}
              selected={props.selected}
            />
          </NavLink>
        }
        {!isLoggedIn &&
          <NavLink to="/login" class="blue-line-be-gone">
            <Tab
              name="login"
              onClick={props.setTab}
              selected={props.selected}
            />
          </NavLink>
        }
      </div>
    </nav>
  );
}