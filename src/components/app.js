import React, { Component } from 'react';
import Dice from './dice'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Dice />
      </div>
    );
  }
}
