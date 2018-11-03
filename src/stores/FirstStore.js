import { observable, action, computed } from 'mobx';

export class FirstStore {
  @observable title = 'Hello World';
  @observable x = 10
  @observable y = 20

  @action changeName = () => {
    this.name = 'park';
  }

  @computed get sumXY() {
    return this.x + this.y
  }
}

export default new FirstStore();