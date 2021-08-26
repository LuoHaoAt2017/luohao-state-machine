// 业务层控件类的实现
import { BaseControl } from "./base-control";
import ControlFactory from './form-control';

export function factoryBuilder(formInstance, updateView) {

  function IBaseControl() {
  }

  IBaseControl.prototype = Object.assign({
    $form: formInstance, 
    $updateView: updateView
  }, BaseControl.prototype);

  return function ImplControl({ opts, data }) {
    const TargetControl = ControlFactory(opts.controlKey);
    function FormControl() {
      // 组合继承
      BaseControl.call(this, opts, data);
      TargetControl.call(this, opts, data);
    }

    const formControlProto = new IBaseControl();
    Object.assign(formControlProto, TargetControl.prototype);
    FormControl.prototype = formControlProto;
    return new FormControl();
  }
}
