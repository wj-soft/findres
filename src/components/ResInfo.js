import React, { Component } from "react";
import { observer, inject } from 'mobx-react';

import ResMap from "../components/ResMap";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';


@inject('AreaInfo', 'FindRes')
@observer
class ResInfo extends Component {

  componentDidMount() {

    // 식당의 상세정보 셋팅 
    this.props.FindRes.getContentInfo1(this.props.resId);
  }

  render() {
    
    return (
      <div>
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
        <ResMap className="res_map"
        mapx={this.props.FindRes.contentInfo.mapx}
        mapy={this.props.FindRes.contentInfo.mapy}/>
        <a href="#" className="btn_top"><span className="screen_out">맨위로</span></a>
        <div className="btn_wrap center">
          <Button className="btn_go_list" variant="contained" color="secondary">
          목록으로 돌아가기
        </Button>
        </div>
      </div>
    );
  }
}

export default ResInfo;