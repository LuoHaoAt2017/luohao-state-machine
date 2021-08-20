import { Mutation } from '@/models/types';
import { identity, isEmpty } from '@/utils';

export function initProxy(control, $data) {
  const value = $data.value;
  const result = control.$initValue(value);
  if (result instanceof Promise) {
    // 首先清空控件的值
    control.$updateView(Mutation.Set, {
      dataField: control.dataField,
      value: control.$clearValue(),
    });
    // 阻塞表单继续操作，直到当前控件获取到值。
    const asyncId = control.$form.$hangupAsync(); // todo
    // 执行异步操作
    result.then((response) => {
      control.$updateView(Mutation.Set, {
        dataField: control.dataField,
        value: response,
      });
      control.value = response;
      defineValueProp(control, $data);
    }).catch((err) => {
      console.error(err);
    }).finally(() => {
      // 释放阻塞
      control.$form.$resolveAsync(asyncId); // todo
    });
  } else {
    control.value = result;
    control.$updateView(Mutation.Set, {
      dataField: control.dataField,
      value: control.value
    });
    defineValueProp(control, $data);
  }
}

// 基类上定义的方法，可以在子类上重写。
export function proxyMixin(control) {
  control.prototype.$isEmpty = isEmpty;
  control.prototype.$valueType = String;
  control.prototype.$getValue = identity;
  control.prototype.$setValue = identity;
  control.prototype.$initValue = identity;
  control.prototype.$getRuleValue = identity;
  control.prototype.$saveDataField = function saveDataField (value) {
    return { [this.dataField]: value };
  };
  control.prototype.$clearValue = function clearValue() {
    return '';
  };
  control.prototype.$validate = function(value) {
    this.valid = {};
    if (this.options.Required) {
      const empty = isEmpty(value);
      if (empty) {
        this.valid.empty = true;
      }
    }
    return !empty;
  }
}

// core 这是初始化代理最核心的部分
// 为控件的 value 定义存取器。
function defineValueProp(control, $data) {
  Object.defineProperty(control, 'value', {
    get: function getter() {
      return control.$getValue($data.value);
    },
    set: function setter(newVal) {
      if (control.$$valueWatcher) {
        // 当前的值缓存为旧值
        control.oldValue = control.value;
      }
      if (isEmpty(newVal)) {
        newVal = this.$clearValue();
      }
      const result = this.$setValue(newVal);
      if (result instanceof Promise) {
        const asyncId = this.$form.$hangupAsync();
        result.then((response) => {
          this.$updateView(Mutation.Set, {
            dataField: this.dataField,
            value: response
          });
          // 派发更新
          this.$dispatch();
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          this.$form.$resolveAsync(asyncId);
        });
      } else {
        this.$updateView(Mutation.Set, {
          dataField: this.dataField,
          value: this.value
        });
        // 派发更新
        this.$dispatch();
      }
    }
  });
}