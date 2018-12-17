import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    return (
      <Link to={`/detail/${this.props.resId}`}>
        <li className="col">
          <a href="#"></a>
          <div className="card">
            <div className="content-img">
              <img src={this.props.imgUrl} alt="" />
            </div>
            <div className="content-txt">
                <h3>{this.props.title}</h3>
                <p>{this.props.addr}</p>
              </div>
            </div>
        </li>
      </Link>
    );
  }
}

export default Card;