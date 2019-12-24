import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: 'hidden'
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  componentDidMount() {
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
  mouseEnter(event) {
    this.setState({
      dropdown: ''
    });
  }
  mouseLeave(event) {
    this.setState({
      dropdown: 'hidden'
    });
  }

  render() {
    return (
      <div className="navbar" >
        <div className="logo logo1">

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
          <div className="link pagesLink" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            Pages
            {// can easily fix, if have fontawesome PRO, gives icon with adaptive color change instead of an image
            }
            <div className="pagesDropdownButton"></div>
            <div className={'dropdown ' + this.state.dropdown}>
              <div>Page 1</div>
              <div>Page 2</div>
              <div>Page 3</div>
            </div>
          </div>
          <div className="link">
            Contact Us
          </div>
        </div>
        <div className="signIn">
          <button className="signInButton">Sign In</button>
        </div>
      </div>
    );
  }
}
