This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Swiper 플러그인 react 프로젝트 적용하는법    
1. npm install --save react-id-swiper / yarn add react-id-swiper 다운

2. <script src="https://unpkg.com/react-id-swiper@1.6.8/lib/react-id-swiper.min.js"></script> / <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css"> index.html에 코드추가

3. SwiperMain 컴포넌트 생성 

4. http://kidjp85.github.io/react-id-swiper/ 사이트에서 원하는 슬라이드를 고른후 example code 참고하여 SwiperMain 컴포넌트에 코드 작성

5. import { observer, inject } from 'mobx-react';
@inject('AreaInfo', 'FindRes')
@observer
componentDidMount()
// 식당 메뉴 추가 이미지 
{this.props.FindRes.getMenuImg(this.props.resId);

// 식당 내부 추가 이미지 
    this.props.FindRes.getAddImg(this.props.resId);}
코드 작성 후에 
return 부분에 <div></div>안에 이미지 정보를 넣기 
(이미지 정보코드는 기존 ResInfo.js 에서 가져옴)
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

6. Detail.js 컴포넌트에 
import SwiperMain from "../components/SwiperMain";
<SwiperMain resId={this.props.match.params.id}/>
코드 추가 작성

7. Detail.js 컴포넌트 안에서  SwiperMain.js 컴포넌트가 ResInfo.js 컴포넌트 위에 위치하기 때문에 제목부분이 아래부분으로 내려가 제목 부분도 SwiperMain 부분에 추가하기 

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  line-height: 1.5em;
  text-align: center;
  color: white;
  background: black;
  height: 50px;
`;

//식당의 기본정보 셋팅 this.props.FindRes.contentInfo
    this.props.FindRes.getContentInfo(this.props.resId);

<div>
          <Title>{this.props.FindRes.contentInfo.title}
          </Title>
        </div>

코드 추가 작성하여 완성하기.
참고 사이트 https://www.npmjs.com/package/react-id-swiper
