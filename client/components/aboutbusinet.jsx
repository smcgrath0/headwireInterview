import React from 'react';

export default function AboutBusinet(props) {
  return (
    <div className="aboutbg">
      <div className="aboutVideo">
        <div className="aboutVideoFilter">
          <button className="playButtonContainer">
            <div className="playButton"></div>
          </button>
        </div>
      </div>
      <div className="aboutContent">
        <div className="aboutHeader">
          ABOUT BUSINET
        </div>
        <div className="aboutText">
          <h2>A Few Words About Us</h2>
          <p>Our consulting company is a leading firm of business managers and advisors with offices across the USA. We aim to provide you:</p>
          <ul>
            <li>Quality research and analysis</li>
            <li>Business advisory experience</li>
            <li>Reliable company management</li>
          </ul>
          <button className="readMore readMore2">Read more</button>
        </div>
      </div>
    </div>
  );
}
