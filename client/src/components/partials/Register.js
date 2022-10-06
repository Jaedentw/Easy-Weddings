import React from "react";
import UserSignUp from "./UserSignUp";
import BusinessSignUp from "./BusinessSignUp";
import { useState } from "react";
import '../../styles/Register.css'





export default function Regsiter(props) {

  let [render, setRender] = useState();

  return (

    <div className="register-container">
    <div>
      <h1>Choose type of account</h1>
      <div>
        <input type="submit" value="User" onClick={()=>setRender('user')}></input>
        <input type="submit" value="Buisness" onClick={()=>setRender('buisness')}></input>
      </div>
    </div>

    {render === 'user'&&<UserSignUp></UserSignUp>}
    {render === 'buisness'&&<BusinessSignUp></BusinessSignUp>}
    </div>

  );
}