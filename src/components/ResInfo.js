import React, { Component } from "react";
import { observer, inject } from 'mobx-react';

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
        <div>이미지 슬라이더 영역 !!!!!</div>
        <h1>식당이름 : {this.props.FindRes.contentInfo.title}</h1>
        <hr/>
        <div>
          <div>
            <ul>
              <li>식당소개 : {this.props.FindRes.contentInfo.overview}</li>
              <li>연락처 : {this.props.FindRes.contentInfo.tel}</li>
              <li>주소 : {this.props.FindRes.contentInfo.addr1}</li>
              <li>홈페이지 : {this.props.FindRes.contentInfo.homepage}</li>
              <li>찾아오는길 : {this.props.FindRes.contentInfo.directions}</li>
              <li>주차시설 : {this.props.FindRes.contentInfo1.parkingfood}</li>
              <li>영업시간 : {this.props.FindRes.contentInfo1.opentimefood}</li>
              <li>대표메뉴 : {this.props.FindRes.contentInfo1.firstmenu}</li>
              <li>취급메뉴 : {this.props.FindRes.contentInfo1.infocenterfood}</li>
              <li>금연흡연 : {this.props.FindRes.contentInfo1.smoking}</li>
              <li>예약안내 : {this.props.FindRes.contentInfo1.reservationfood}</li>
            </ul>
          </div>
        </div>
        <div>
          지도영역
          좌표 : {this.props.FindRes.contentInfo.mapx}, {this.props.FindRes.contentInfo.mapy}
        </div>
        <button>목록으로 돌아가기 버튼</button>
      </div>
    );
  }
}

export default ResInfo;