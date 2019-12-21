import React from 'react';
import Homepage from './homepage';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}
