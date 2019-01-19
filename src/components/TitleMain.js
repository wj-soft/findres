import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5em;
  line-height: 1.5em;
  text-align: center;
  color: white;
  background: black;
  height: 50px;
`;

@inject('AreaInfo', 'FindRes')
@observer
class TitleMain extends Component {
  componentDidMount(){
    //식당의 기본정보 셋팅 this.props.FindRes.contentInfo
    this.props.FindRes.getContentInfo(this.props.resId);
  }

  render(){
    return(
        <Title><h1>{this.props.FindRes.contentInfo.title}</h1></Title>
    );
  }
}

export default TitleMain;