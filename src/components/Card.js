import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <li className="col">
        <a href="#"></a>
        <div className="card">
          <div className="content-img">
            <img src="https://news.samsung.com/kr/wp-content/uploads/2015/09/%ED%88%AC%EB%AA%A8%EB%A1%9C%EC%9A%B0%EC%97%90%EC%84%B8%EC%9D%B4%EA%B0%80%EC%9E%A5%EC%8A%AC%ED%94%88%EC%9D%8C%EC%8B%9D8.jpg" alt="" />
          </div>
          <div className="content-txt">
              <h3>식당이름</h3>
              <p>식당소개</p>
            </div>
          </div>
      </li>
    );
  }
}

export default Card;