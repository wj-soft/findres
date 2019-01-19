import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Swiper from 'react-id-swiper';


@inject('AreaInfo', 'FindRes')
@observer
class SwiperMain extends Component {

  componentDidMount(){

    // 식당 메뉴 추가 이미지
    this.props.FindRes.getMenuImg(this.props.resId);

    // 식당 내부 추가 이미지 
    this.props.FindRes.getAddImg(this.props.resId);
  }

  render(){
    const params = {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };

    return (
        <div>
          <Swiper {...params} shouldSwiperUpdate="true">
              {!this.props.FindRes.addImg ? false : this.props.FindRes.addImg.map((v, i) => {
                return  <div shouldSwiperUpdate="true" ><img src={v.originimgurl} alt={this.props.FindRes.contentInfo.title} key={i}/></div>
              })}
            
              { !this.props.FindRes.menuImg ? false : this.props.FindRes.menuImg.map((v, i) => {
                return  <div><img src={v.originimgurl} alt={this.props.FindRes.contentInfo.title} key={i}/></div>
              })} 
          </Swiper>
        </div>
    );
  }
}

export default SwiperMain;