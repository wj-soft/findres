import React, { Component } from "react";
import { observer, inject } from 'mobx-react';

@inject('AreaInfo', 'FindRes')
@observer
class SelectBox extends Component {

  componentDidMount() {
    this.props.AreaInfo.getArea();
  }

  selectSido = (e) => {
    this.props.AreaInfo.selectedSido = e.target.value;
    this.props.AreaInfo.getGugun(e.target.value);
  }

  selectGugun = (e) => {
    this.props.AreaInfo.selectedGugun = e.target.value;
  }

  searchAreaRes = () => {
    const sidoCd = this.props.AreaInfo.selectedSido
    const gugunCd = this.props.AreaInfo.selectedGugun
    this.props.FindRes.changeList(sidoCd, gugunCd);
  }

  render() {
    let gugunList = this.props.AreaInfo.gugunList
    if (!gugunList.length) {
      gugunList = [];
    } 
    return (
      <div className="search-option">
        <div className="select-sido">
          <select name="" id="" onChange={this.selectSido}>
            <option>Plase Select Area (SIDO)</option>
            {this.props.AreaInfo.areaInfo.map( (v, i) => {
              return (<option value={v.code} key={i}>{v.name}</option>)
            })}
          </select>
        </div>
        <div className="select-sigungu">
          <select name="" id="" onChange={this.selectGugun}>
            <option>Plase Select Area (GUGUN)</option>
            {gugunList.map((v, i) => {
              return (<option value={v.code} key={i}>{v.name}</option>)
            })}
          </select>
        </div>
        <div className="search-button">
          <button onClick={this.searchAreaRes}>찾기버튼</button>
        </div>
      </div>
    );
  }
}

export default SelectBox;