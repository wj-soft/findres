import React, { Component } from "react";
import IntroView from "../components/IntroView";
import SelectBox from "../components/SelectBox";
import ResInfo from "../components/ResInfo";
import SwiperMain from "../components/SwiperMain";
import TitleMain from  "../components/TitleMain";

class Detail extends Component {
  scroll0 = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.scroll0();
  }

  render() {
    return (
      <div className="main wrap">
        <IntroView />
        <SelectBox />
        <TitleMain resId={this.props.match.params.id}/>
        <SwiperMain resId={this.props.match.params.id}/>
        <ResInfo resId={this.props.match.params.id}/>
      </div>
    );
  }
}

export default Detail;