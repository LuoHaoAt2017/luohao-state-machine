// 维护发布者和订阅者之间的关系
// 注册发布者和订阅者
// 派发消息给消息队列

import { toArray } from '../utils';

export default class Dispatcher {

  constructor(formInstance) {
    this.pubsubs = {};
    this.$form = formInstance;
  }

  register(pub, sub) {
    const pubers = toArray(pub);
    const subers = toArray(sub);
    for(let i = 0; i < pubers.length; i++) {
      const curpuber = pubers[i];
      for(let j = 0; j < subers.length; j++) {
        const cursuber = subers[j];
        if (!this.pubsubs[curpuber]) {
          this.pubsubs[curpuber] = [];
        }
        this.pubsubs[curpuber].push(cursuber);
      }
    }
  }

  dispatch(puber) {
    // 获取当前发布者的订阅者，给所有的订阅者发布消息。
    const subscribers = this.pubsubs[puber];
    const pubControl = this.$form[puber];
    if (subscribers && subscribers.length) {
      subscribers.forEach((suber) => {
        this.$form[suber].$update(pubControl);
      });
    }
  }
}