import React, { Component } from "react";
import { observer, inject } from 'mobx-react';

@inject('AreaInfo', 'FindRes')
@observer
class ResInfo extends Component {

  componentDidMount() {
    //식당의 기본정보 셋팅 this.props.FindRes.contentInfo
    this.props.FindRes.getContentInfo(82);
    this.props.FindRes.getContentInfo1(82);
    this.props.FindRes.getMenuImg(82);
    this.props.FindRes.getAddImg(82);
    // 식당의 상세정보 셋팅 
  }

  render() {
    return (
      <div>
        <div>이미지 슬라이더 영역</div>
        <h1>식당이름 영역{this.props.FindRes.contentInfo.title}</h1>
        <hr/>
        <div>
          <p>이식당은 ~~~~~~

          </p>
          <div>
            <ul>
              <li>연락처</li>
              <li>홈페이지</li>
            </ul>
          </div>
        </div>
        <div>
          지도영역
        </div>
        <button>목록으로 돌아가기 버튼</button>
      </div>
    );
  }
}

export default ResInfo;