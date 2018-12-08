import { observable, action, computed } from 'mobx';
// import request from '../lib/axios';
import { getArea } from '../api/tour3';
import request from '../lib/axios';

export class AreaInfo {
  @observable.shallow areaInfo = [];

  @action getArea = () => {
    request.get(getArea()).then(res => {
      this.areaInfo = res.data.response.body.items.item
    })
  }
}

export default new AreaInfo();

