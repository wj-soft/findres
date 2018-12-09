import { observable, action } from 'mobx';
import { getArea, getGugun } from '../api/tour3';
import request from '../lib/axios';

export class AreaInfo {
  @observable.shallow areaInfo = [];
  @observable.shallow gugunList = [];

  @observable selectedSido ='';
  @observable selectedGugun = '';


  @action getArea = () => {
    request.get(getArea()).then(res => {
      this.areaInfo = res.data.response.body.items.item
    })
  }

  @action getGugun = (sidoCd) => {
    request.get(getGugun(sidoCd)).then(res => {
      this.gugunList = res.data.response.body.items.item
    })
  }
}

export default new AreaInfo();

