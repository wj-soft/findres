import React, { Component } from "react";
import Card from './Card';

class CardContainer extends Component {
  render() {
    return (
      <div className="contents">
        <ul>
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    );
  }
}

export default CardContainer;