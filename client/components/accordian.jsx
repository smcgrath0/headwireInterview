import React from 'react';
// use Material-ui just for drop down icon because font-awesome requires PRO version
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false
    };
    this.elements = [
      {
        title: `What am I allowed to do with the templates?`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.`
      },
      {
        title: `Do you provide any scripts with your templates?`,
        description: `Our templates do not include any additional scripts. Newsletter subscriptions, search fields, forums, image galleries(in HTML versions of Flash products) are active. Basic scripts can be easily added at www.zemez.io if you are not sure that the element you're interested in is active *please contact our Support Chat for clarification.`
      },
      {
        title: `What do I receive when I order a template from Zemez?`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.`
      },
      {
        title: `In what formats are your templates available?`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.`
      }
    ];

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const { value } = event.target.parentElement.classList;
    const check = value[value.length - 1];
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false
    }, () => this.setState({
      ['tab' + check]: true
    }));
  }
  render() {
    return (
      <div className="accordianContainer">
        {this.elements.map((tab, index) => {
          let arrowHidden = '';
          let xHidden = ' hidden';
          let description = 'closed';
          let titleContainer = '';
          if (this.state['tab' + (index + 1)]) {
            arrowHidden = ' hidden';
            xHidden = '';
            description = 'open';
            titleContainer = 'blueFont';
          }
          return (
            <div key={index} className={'accordianElement ' + description}>
              <div className={'accordianElementTitleContainer ' + titleContainer}>
                <h2 className="accordianElementTitle" >{tab.title}</h2>
                <div className={'accordianDropdownArrow ' + (index + 1) + arrowHidden}>
                  <KeyboardArrowDownIcon onClick={this.handleClick} id="accordianDropdown"/>
                </div>

                <div className={'accordianDropdownX' + xHidden} onClick={this.handleClick}>
                  <i className="fas fa-times-circle"></i>
                </div>
              </div>
              <p className="accordianElementDescription">
                {tab.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
