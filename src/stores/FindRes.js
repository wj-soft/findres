import { observable, action } from 'mobx';
import { getDefaultList, changeList, getContentInfo, getContentInfo1, getAddImg, getMenuImg } from '../api/tour3';
import request from '../lib/axios';

export class FindRes {
  @observable.shallow searchList = [];
  @observable contentInfo = '';
  @observable contentInfo1 = '';
  @observable menuImg = [];
  @observable addImg = [];

  @action getSearchList = () => {
    request.get(getDefaultList()).then(res => {
      this.searchList = res.data.response.body.items.item
    })
  }

  @action changeList = (sidoCd, gugunCd) => {
    request.get(changeList(sidoCd, gugunCd)).then(res => {
      this.searchList = res.data.response.body.items.item
    })
  }

  @action getContentInfo = (contentId) => {
    request.get(getContentInfo(contentId)).then(res => {
      this.contentInfo = res.data.response.body.items.item
    })
  }

  @action getContentInfo1 = (contentId) => {
    request.get(getContentInfo1(contentId)).then(res => {
      this.contentInfo1 = res.data.response.body.items.item
    })
  }

  @action getMenuImg = (contentId) => {
  request.get(getMenuImg(contentId)).then(res => {
      this.menuImg = res.data.response.body.items.item
    })
    }

  @action getAddImg = (contentId) => {
    request.get(getAddImg(contentId)).then(res => {
      this.addImg = res.data.response.body.items.item
    })
  }
}

export default new FindRes();

