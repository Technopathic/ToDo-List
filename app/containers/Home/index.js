/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      listItems:[],
      inputItem:""
    }
  };

  handleItem = (event) => {
    this.setState({
      inputItem:event.target.value
    })
  };

  storeItem = () => {
    var listItems = this.state.listItems;
    var inputItem = this.state.inputItem;

    if(inputItem !== "") {
      listItems.push(inputItem);

      this.setState({
        listItems:listItems,
        inputItem:""
      })
    }
  };

  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <div className="inputContainer">
          <input type="text" className="todoInput" onChange={this.handleItem} value={this.state.inputItem}/>
          <input type="submit" value="Add to List" className="todoButton" onClick={this.storeItem}/>
        </div>
        <div className="todoList">
          {this.state.listItems.map((item, index) => (
            <div className="listItem" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
