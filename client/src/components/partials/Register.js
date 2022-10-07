import React from "react";
import UserSignUp from "./UserSignUp";
import '../../styles/Register.css'

//<input type="submit" value="Buisness" onClick={()=>setRender('buisness')}></input>
//{render === 'user'&&<UserSignUp></UserSignUp>}


export default function Regsiter(props) {


  return (

    <div className="register-container">
      <UserSignUp>

      </UserSignUp>
    </div>

  );
}