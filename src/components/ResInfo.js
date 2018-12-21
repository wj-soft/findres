import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';


const Title = styled.h1`
  font-size: 1.5em;
  line-height: 1.5em;
  text-align: center;
  color: white;
  background: black;
  height: 50px;
`;

@inject('AreaInfo', 'FindRes')
@observer
class ResInfo extends Component {

  componentDidMount() {
    //식당의 기본정보 셋팅 this.props.FindRes.contentInfo
    this.props.FindRes.getContentInfo(this.props.resId);

    // 식당의 상세정보 셋팅 
    this.props.FindRes.getContentInfo1(this.props.resId);

    // 식당 메뉴 추가 이미지
    this.props.FindRes.getMenuImg(this.props.resId);

    // 식당 내부 추가 이미지
    this.props.FindRes.getAddImg(this.props.resId);
  }

  render() {
    return (
      <div>
        <Title>{this.props.FindRes.contentInfo.title}</Title>
        <div>
          {!this.props.FindRes.addImg ? false : this.props.FindRes.addImg.map((v, i) => {
            return  <img src={v.originimgurl} alt={this.props.FindRes.contentInfo.title} key={i}/>
          })}
        </div>
        <div>
          {!this.props.FindRes.menuImg ? false : this.props.FindRes.menuImg.map((v, i) => {
            return  <img src={v.originimgurl} alt={this.props.FindRes.contentInfo.title} key={i}/>
          })}
        </div>
        <hr/>
        <List>
          <ListItem>
            <ListItemText primary="식당소개" secondary={this.props.FindRes.contentInfo.overview}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="주소" secondary={this.props.FindRes.contentInfo.addr1}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="연락처" secondary={this.props.FindRes.contentInfo.tel}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="예약안내" secondary={this.props.FindRes.contentInfo1.reservationfood}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="홈페이지" secondary={this.props.FindRes.contentInfo.homepage}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="대표메뉴" secondary={this.props.FindRes.contentInfo1.firstmenu}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="영업시간" secondary={this.props.FindRes.contentInfo1.opentimefood}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="찾아오는 길" secondary={this.props.FindRes.contentInfo.directions}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="주차시설" secondary={this.props.FindRes.contentInfo1.parkingfood}></ListItemText>
          </ListItem>   
        </List>
        <div>
          지도영역
          좌표 : {this.props.FindRes.contentInfo.mapx}, {this.props.FindRes.contentInfo.mapy}
        </div>
        <Button variant="contained" color="secondary">
          목록으로 돌아가기 버튼
        </Button>
      </div>
    );
  }
}

export default ResInfo;