import React, { Component } from "react";
import '../styles/Button.css';
class ScrollTop extends Component {	
      
  scroll0 = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="lay-inner btn-wrap float">
        <div className="list">
          <button className="btn scroll-top" type="button" onClick={this.scroll0}><span className="hidden">상단으로 바로가기</span></button>
          <a className="btn circle" href="#" title="문의하기 - 새창"><span className="hidden">문의하기</span></a>
        </div>
      </div>
    );
  }
}

export default ScrollTop;