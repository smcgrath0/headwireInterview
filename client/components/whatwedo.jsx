import React from 'react';

export default class WhatWeDo extends React.Component {
  constructor(props) {
    super(props);
    // makes it easy to add another card
    // cardId is associated with the icon/background image
    this.state = {
      cards: [
        { cardId: '1', cardTitle: 'Market Analysis', cardMessage: 'We support your business with fact-based market research.' },
        { cardId: '2', cardTitle: 'Funds Management', cardMessage: `Allowing you to successfully deal with your company's funds` },
        { cardId: '3', cardTitle: 'PR & Marketing', cardMessage: 'Helping clients expand awareness and manage their reputation.' },
        { cardId: '4', cardTitle: 'Business Planning', cardMessage: `Creating an efficient business plan designed to fit your company.` },
        { cardId: '5', cardTitle: 'Audit', cardMessage: `Deep and detailed investigation of your company's activity` },
        { cardId: '6', cardTitle: 'Consulting', cardMessage: `Focusing on our clients' most critical issues and opportunities.` }
      ]
    };
  }
  render() {
    return (
      <div className="whatWeDoContainer">
        <div className="ourServices">OUR SERVICES</div>
        <div className="whatWeDoText">What We Do</div>
        <div className="cardContainer">
          {this.state.cards.map((card, index) => {
            return (
              <Card key={index} card={card} />
            );
          })}
        </div>
      </div>
    );
  }
}

function Card(props) {
  return (
    <div className="card">
      <div className="iconContainer">
        <div className={'icon icon' + props.card.cardId}></div>
        <div className="grayDot"></div>
      </div>
      <h2>{props.card.cardTitle}</h2>
      <p>{props.card.cardMessage}</p>
    </div>
  );
}
