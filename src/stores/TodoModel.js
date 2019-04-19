import { observable, action } from "mobx";

export default class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;
  @observable eliminate;

  constructor(store, title, completed, id, eliminate) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
    this.eliminate = eliminate;
  }

  @action
  toggle() {
    this.completed = !this.completed;
  }
}
