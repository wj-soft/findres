import React, { Component } from "react";
import { observer, inject } from 'mobx-react';

@inject('AreaInfo')
@observer
class SelectBox extends Component {

  componentDidMount() {
    this.props.AreaInfo.getArea();
  }

  handleClick(e) {
    console.log('change');
    console.log(e.target.value);
  }



  render() {
    return (
      <div className="search-option">
        <div className="select-sido">
          <select name="" id="" onChange={this.handleClick}>
            {this.props.AreaInfo.areaInfo.map( (v, i) => {
              return (<option value={v.code} key={i}>{v.name}</option>)
            })}
          </select>
        </div>
        <div className="select-sigungu">
          <select name="" id="">
            <option value="">1111번</option>
            <option value="">1111번</option>
            <option value="">1111번</option>
            <option value="">1111번</option>
          </select>
        </div>
        <div className="search-button">
          <button>찾기버튼</button>
        </div>
      </div>
    );
  }
}

export default SelectBox;