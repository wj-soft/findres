import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const imgUrl = this.props.imgUrl ? this.props.imgUrl : 'http://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif'
    return (
      <li className="col">
          {/* <a href="#"></a> */}
          <div className="card">
            <div className="content-img">
              <Link to={`/detail/${this.props.resId}`}>
                <img src={imgUrl} alt="" />
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