import React, { Component } from 'react';

import css from './counter.module.css';

export default class Counter extends Component {
  constructor() {
    super();

    //apenas para teste verificar no console logo a inutilidade, pois no react
    //utilizamos o state.
    this.currentCounter = 2;
  }

  //apenas para mostrar no console que nao modifica na internface o valor
  handleClick = () => {
    console.log('Click');
    this.currentCounter--;
    this.render();
  }

  render() {
    return (
      <div className={css.counterContainer}>
        <button onClick={this.handleClick} className="waves-effect waves-light btn red darken-4">-</button>
        <span className={css.counterValue}>{this.currentCounter}</span>
        <button className="waves-effect waves-light btn green darken-4">+</button>
      </div>
    );
  }
}