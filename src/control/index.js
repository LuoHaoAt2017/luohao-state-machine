// 业务层控件类的实现
import { BaseControl } from "./base-control";
import formControlFactory from './form-control';

export function factoryBuilder(formInstance, updateView) {

  BaseControl.prototype = {
    formInstance: formInstance, 
    updateView: updateView
  }

  return function controlFactory(options, $data) {
    const TargetControl = formControlFactory(options.controlKey);

    function FormControl() {
      // 组合继承
      BaseControl.call(this, options, $data);
      TargetControl.call(this, options, $data);
    }

    const formControlProto = new BaseControl(options, $data);
    Object.assign(formControlProto, TargetControl.prototype);
    FormControl.prototype = formControlProto;
    return new FormControl();
  }
}
