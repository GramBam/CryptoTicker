import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {

  render() {
    var {
      id,
      name,
      symbol,
      price_usd,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d,
    } = this.props.data;
    return (
      <li className={"cryptocurrency " + id}>
        <p className="cryptocurrency-name">{name} ({symbol})</p>
        <h1>${ (+price_usd).toFixed(2) }</h1>
        <p><strong>{percent_change_1h}%</strong> 1 hour</p>
        <p><strong>{percent_change_24h}%</strong> 24 hours</p>
        <p><strong>{percent_change_7d}%</strong> 7 days</p>
      </li>
    );
  }
}

export default Cryptocurrency
