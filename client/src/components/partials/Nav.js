import React, { useEffect, useState } from 'react';
import "../../styles/Nav.css";
import Tab from './Tab';
import { NavLink } from "react-router-dom";

export default function Nav(props) {

  const [isLoggedIn, setIsloggedIn] = useState(
    null
  );

  useEffect(() => {
    if (props.user.id === undefined) {
      setIsloggedIn(false);
    }
    else {
      setIsloggedIn(true);
    }
  }, [props.user]);

  return (
    <nav class="nav-container">
      <div class="upper-nav">
        <a href="/" class="nav-title">Easy Weddings</a>

        {(isLoggedIn &&

          <div class="nav-log">
            <div class="upper-log">
              <strong>Signed in as: </strong><span>{props.user.is_business ? props.user.business_name : props.user.first_name}</span>
            </div>
            <div>
              <button onClick={props.logout} value="Logout"><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
            </div>
          </div>)
        }
      </div>
      <div class="nav-bar-container">
        <NavLink to="/" >
          <Tab
            name="About"
            onClick={props.setTab}
            selected={props.selected}
          />
        </NavLink>

        {isLoggedIn && !props.user.is_business &&
          <NavLink to="/weddings">
            <Tab
              name="Weddings"
              onClick={props.setTab}
              selected={props.selected}
            />
          </NavLink>
        }
        {isLoggedIn && props.user.is_business &&
          <NavLink to="/listings">
            <Tab
              name="Listings"
              onClick={props.setTab}
              selected={props.selected}
            />
          </NavLink>
        }

        <NavLink to="/browse">
          <Tab
            name="Vendors"
            onClick={props.setTab}
            selected={props.selected}
          />
        </NavLink>

        {!isLoggedIn &&
          <NavLink to="/register">
            <Tab
              name="Register"
              onClick={props.setTab}
              selected={props.selected}
            />
          </NavLink>
        }
        {!isLoggedIn &&
          <NavLink to="/login">
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