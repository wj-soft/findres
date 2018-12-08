import { observable, action, computed } from 'mobx';
// import request from '../lib/axios';
import {getArea} from '../api/tour3';
import request from '../lib/axios';

export class FindRes {
  @observable title = 'Hello World';
  @observable.shallow testApiRes= [];
  @observable x = 10
  @observable y = 20

  @action getArea = () => {
    request.get(getArea()).then(res => {
      this.testApiRes = res.data.response.body.items.item
    })
  }

  @computed get sumXY() {
    return this.x + this.y
  }
}

export default new FindRes();

