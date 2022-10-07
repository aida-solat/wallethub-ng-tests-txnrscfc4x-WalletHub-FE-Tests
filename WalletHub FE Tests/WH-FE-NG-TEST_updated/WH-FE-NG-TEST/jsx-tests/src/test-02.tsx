/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mainArea">
        <p>button count: <span>0</span></p>
        <button id="mainButton">Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('test-02')
);