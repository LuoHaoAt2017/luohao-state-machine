import { toArray } from "@/utils";

export function pubsubMixin(control) {
  // 在分发器上注册订阅消息
  control.prototype.$subscribe = function subscribe(fields) {
    const fieldList = toArray(fields);
    // fieldList 中的每一个对象都订阅当前控件的变化
    this.$form.$dispatcher.register(this.dataField, fieldList);
  }
  // 当前控件发布消息给他的订阅者
  control.prototype.$publish = function publish() {
    // 暂时不区分子表
    const message = {
      source: this.dataField
    }
    this.$form.$dispatcher.publish(control, message);
  }
}
