// Make sure to import React and ReactDOM
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = ['Tenderloin', 'Short ribs', 'Beef shin', 'Ribeye'];

class OlderCoaster {
  render() {
    <div class="oldercoaster">
      <p>Two grannies having the time of their life!</p>
      <p>Passengers:</p>
      <ul>
        <li>Agnes</li>
        <li>Muriel</li>
      </ul>
    </div>;
  }
}

class InFrontOfYou {
  render() {
    <div>
      <p>
        {"You shouldn't look too far."}
      </p>
      <p>Sometimes, the solution is right in front of you.</p>
    </div>;
  }
}

class ButherShop {
  render() {
    <div class="butcher-shop">
      <p>Hello! We have the following products for sale today:</p>
      <ul>
        {BUTCHER_PRODUCTS.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </div>
  }
}

// Define these exported classes
export class OlderCoaster extends React.Component {}
export class InFrontOfYou extends React.Component {}
export class ButcherShop extends React.Component {}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
