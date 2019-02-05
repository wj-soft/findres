import { observable, action, toJS } from 'mobx';
import { getDefaultList, changeList, getContentInfo, getContentInfo1, getAddImg, getMenuImg, addList } from '../api/tour3';
import request from '../lib/axios';

export class FindRes {
  @observable searchList = [];
  @observable contentInfo = '';
  @observable contentInfo1 = '';
  @observable menuImg = [];
  @observable addImg = [];
  currentPage = 1;
  totalCount = 0;

  @action getSearchList = () => {
    request.get(getDefaultList()).then(res => {
      this.currentPage = 1
      this.searchList = toJS(res.data.response.body.items.item)
      this.totalCount = res.data.response.body.totalCount
    })
  }

  @action getMoreList = (sido,sigungu) => {
    request.get(addList(sido, sigungu, this.currentPage +1)).then(res => {
      const moreContent = toJS(res.data.response.body.items.item)
      if (!moreContent) {
        alert('컨텐츠 없음');
        return false;
      }
      this.searchList.push(...moreContent)
      this.currentPage++
    })
  }

  @action changeList = (sidoCd, gugunCd) => {
    request.get(changeList(sidoCd, gugunCd)).then(res => {
      this.currentPage = 1
      this.searchList = toJS(res.data.response.body.items.item)
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

