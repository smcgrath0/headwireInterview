import React from 'react';

export default class Homepage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="homebg">
        <div className="homebgContainer">
          <div className="line">

          </div>
          <div className="homebgTextContainer">
            <h2>Professional Business Consulting</h2>
            <p>Business provides reliable business planning, management, and advisory services backed by years of experience in the industry.</p>
            <div className="homebgButtonContainer">
              <button className="readMore">Read more</button>
              <button className="contactUs">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
