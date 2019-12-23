import React from 'react';
import Homepage from './homepage';
import Navbar from './navbar';
import WhatWeDo from './whatwedo';
import AboutBusinet from './aboutbusinet';
import Accordian from './accordian';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Navbar />
        <Homepage />
        <WhatWeDo />
        <AboutBusinet />
        <Accordian />
      </div>
    )
  }
}
