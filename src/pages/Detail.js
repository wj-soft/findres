import React, { Component } from "react";
import IntroView from "../components/IntroView";
import SelectBox from "../components/SelectBox";
import ResInfo from "../components/ResInfo";
class Detail extends Component {
  render() {
    return (
      <div className="main wrap">
        <IntroView />
        <SelectBox />
        <ResInfo />
      </div>
    );
  }
}

export default Detail;