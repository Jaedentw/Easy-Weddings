import React, { Component } from 'react';
import '../styles/About.css'

export default function AboutPage(props) {

  return (
    <div className='about-container'>
      <div className='about-content'>
      <h1>About us</h1>
      <p>Our goal is to make your wedding easy, fun and creative. With great features and selections of Caterers, Decorators, Venues and Vendors.  Each person can create multiple different weddings, with each wedding containing different styles or choices. Easy weddings comes with easy managment of guest lists to manage your attendence. Simply <a href="register">register</a> an account and start today!</p>

      <h2>Businesses</h2>
      <p>For businesses wishing to advertise their services simply <a href="register">register</a> an account and start creating listings. Apon creating your service you can then update/delete them. Easy weddings wants to ensure the best managment for businesses.</p>
      </div>
    </div>

  );

}
