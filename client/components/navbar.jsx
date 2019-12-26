import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

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
            <p>Home</p>
          </div>
          <div className="link">
            <p>About Us</p>
          </div>
          <div className="link">
            <p>Our Team</p>
          </div>
          <div className="link">
            <p>Pricing</p>
          </div>
          <div className="link pagesLink" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <p>Pages</p>
            <div id="pagesDropdownButton">
              <KeyboardArrowDownIcon />
            </div>
            <div className={'dropdown ' + this.state.dropdown}>
              <div>Page 1</div>
              <div>Page 2</div>
              <div>Page 3</div>
            </div>
          </div>
          <div className="link">
            <p>Contact Us</p>
          </div>
        </div>
        <div className="signIn">
          <button className="signInButton">Sign In</button>
        </div>
      </div>
    );
  }
}
