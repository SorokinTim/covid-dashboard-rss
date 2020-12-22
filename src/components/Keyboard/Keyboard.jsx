import React, { Component } from 'react';
import KeyboardClass from './KeyboardClass';
import style from './Keyboard.css';

export default class Keyboard extends Component {
  constructor() {
    super();
    this.keyboardRef = React.createRef();
  }

  componentDidMount() {
    this.initializeKeyboard();
  }

  initializeKeyboard() {
    const input = document.querySelector('#search');
    const keyboardSwitcher = document.querySelector('#keyboardSwitcher');

    this.keyboard = new KeyboardClass(input, keyboardSwitcher);
    this.keyboard.init(this.keyboardRef);
  }

  render() {
    return (
      <div className={style.keyboard} ref={(el) => { this.keyboardRef = el; }} />
    );
  }
}
