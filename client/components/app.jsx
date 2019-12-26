import React from 'react';
import Homepage from './homepage';
import Navbar from './navbar';
import WhatWeDo from './whatwedo';
import AboutBusinet from './aboutbusinet';
import Accordian from './accordian';

export default class App extends React.Component {
  componentDidMount() {
    // for nav
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
