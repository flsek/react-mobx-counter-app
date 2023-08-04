import { computed, makeAutoObservable, observable, action } from "mobx";
export default class counterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this, {
      count: observable,
      isNegative: computed,
      increase: action,
      decrease: action,
    });
  }

  get isNegative() {
    return this.count < 0 ? "Yes" : "No";
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }
}
