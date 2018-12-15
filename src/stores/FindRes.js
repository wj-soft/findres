import { observable, action } from 'mobx';
import { getDefaultList, changeList } from '../api/tour3';
import request from '../lib/axios';

export class FindRes {
  @observable.shallow searchList = [];

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
}

export default new FindRes();

