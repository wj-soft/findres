import React, { Component } from "react";
import IntroView from "../components/IntroView";
import SelectBox from "../components/SelectBox";
import CardContainer from '../components/CardContainer';

class Home extends Component {
  render() {
    return (
    <div className="main wrap">
      <div className="area_top">
        <IntroView />
        <SelectBox />
      </div>
      <CardContainer/>
    </div>
    );
  }
}

export default Home;