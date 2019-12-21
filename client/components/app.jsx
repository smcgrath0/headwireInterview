import React from 'react';
import Homepage from './homepage';
import Navbar from './navbar';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Navbar />
        <Homepage />
      </div>
    )
  }
}
