// 业务层控件类的实现
import { BaseControl } from "./base-control";
import formControlFactory from './form-control';

export function factoryBuilder(formInstance, updateView) {

  function IBaseControl() {
  }

  IBaseControl.prototype = Object.assign({
    $formInstance: formInstance, 
    $updateView: updateView
  }, BaseControl.prototype);

  return function controlFactory(options, $data) {
    const TargetControl = formControlFactory(options.controlKey);

    function FormControl() {
      // 组合继承
      BaseControl.call(this, options, $data);
      TargetControl.call(this, options, $data);
    }

    const controlProto = new IBaseControl();
    Object.assign(controlProto, TargetControl.prototype);
    FormControl.prototype = controlProto;
    return new FormControl();
  }
}
