import React from 'react';
// use Material-ui just for drop down icon because font-awesome requires PRO version
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
            <a>Home</a>
          </div>
          <div className="link">
            <a>About Us</a>
          </div>
          <div className="link">
            <a>Our Team</a>
          </div>
          <div className="link">
            <a>Pricing</a>
          </div>
          <div className="link pagesLink" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
            <a>Pages</a>
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
            <a>Contact Us</a>
          </div>
        </div>
        <div className="signIn">
          <button className="signInButton">Sign In</button>
        </div>
      </div>
    );
  }
}
