import React from 'react';

export default class Navbar extends React.Component {
  render(){
    return (
      <div className="navbar">
        <div className="logo">

        </div>
        <div className="links">
          <div className="link">
            Home
          </div>
          <div className="link">
            About Us
          </div>
          <div className="link">
            Our Team
          </div>
          <div className="link">
            Pricing
          </div>
          <div className="link">
            Pages
          </div>
          <div className="link">
            Contact Us
          </div>
        </div>
        <div className="signIn">
          <button className="signInButton">Sign In</button>
        </div>
      </div>
    )
  }
}
