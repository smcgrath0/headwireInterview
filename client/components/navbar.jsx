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
