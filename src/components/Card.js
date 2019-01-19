import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    return (
      <li className="col">
          {/* <a href="#"></a> */}
          <div className="card">
            <div className="content-img">
              <Link to={`/detail/${this.props.resId}`}>
                <img src={this.props.imgUrl} alt="" />
              </Link>
            </div>
            <div className="content-txt">
                <h3 className="tit">
                  <Link to={`/detail/${this.props.resId}`}>{this.props.title}</Link></h3>
                <p className="desc">{this.props.addr}</p>
              </div>
            </div>
        </li>
    );
  }
}

export default Card;