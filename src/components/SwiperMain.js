import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';

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
class Navigation extends Component {

  componentDidMount(){
   
    //식당의 기본정보 셋팅 this.props.FindRes.contentInfo
    this.props.FindRes.getContentInfo(this.props.resId);

    // 식당 메뉴 추가 이미지
    this.props.FindRes.getMenuImg(this.props.resId);

    // 식당 내부 추가 이미지 
    this.props.FindRes.getAddImg(this.props.resId);
  }

  render(){
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <div>
        <div>
          <Title>{this.props.FindRes.contentInfo.title}
          </Title>
        </div>
        <div>
          <Swiper {...params}>
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
          </Swiper>
        </div>
      </div>
    )
  }
}

export default Navigation;