import React from "react";
import videoBg from '../assets/homeVideo.mp4'
import '../styles/homePage.css'

export default function HomePage(props) {
  return (
    <div className="home-page">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted/>
      <div className="content">
        <h1>Easy Weddings</h1>
        <p>Create, design and plan your future wedding!</p>
      </div>
    </div>
  )
}