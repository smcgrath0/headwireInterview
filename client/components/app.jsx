import React from 'react';
import Homepage from './homepage';
import Navbar from './navbar';
import WhatWeDo from './whatwedo';
import AboutBusinet from './aboutbusinet';
import Accordian from './accordian';

export default class App extends React.Component {
  componentDidMount() {
    // for navbar, on window so felt it belonged in the app component
    window.onscroll = function (event) {
      var myNav = document.querySelector('.navbar');
      var logo = document.querySelector('.logo');
      if (event.srcElement.scrollingElement.scrollTop >= 200) {
        logo.classList.add('logo2');
        logo.classList.remove('logo1');
        myNav.classList.add('nav-colored');
        myNav.classList.remove('nav-transparent');
      } else {
        logo.classList.add('logo1');
        logo.classList.remove('logo2');
        myNav.classList.add('nav-transparent');
        myNav.classList.remove('nav-colored');
      }
    };
  }
  // if I was setting up more than just the front page, I would probably use React Router, but for this application there is no need
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
        <WhatWeDo />
        <AboutBusinet />
        <Accordian />
      </div>
    );
  }
}
