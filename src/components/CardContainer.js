import React, { Component } from "react";
import Card from './Card';
import NorResult from './NoResult';

import { observer, inject } from 'mobx-react';
import styled from 'styled-components';


const MoreContent = styled.button`
  background: black;
  color: white;
  margin: 10px 0 10px 0;
  width: 100%
  height: 50px;
`;

@inject('FindRes', 'AreaInfo')
@observer
class CardContainer extends Component {
  componentDidMount() {
    this.props.FindRes.getSearchList();
  }

  moreList = () => {
    this.props.FindRes.getMoreList(this.props.AreaInfo.selectedSido, this.props.AreaInfo.selectedGugun);
  }
  
  render() {
    if (!this.props.FindRes.searchList) {
      return <NorResult/>
    }
    return (
      <div className="contents">
        <ul>
          {this.props.FindRes.searchList.map((v, i) => {
            return (<Card key={v.contentid} title={v.title} imgUrl={v.firstimage} addr={v.addr1} resId={v.contentid}/>)
          })}
        </ul>
        <MoreContent onClick={this.moreList}>더보기</MoreContent>
      </div>
    );
  }
}

export default CardContainer;