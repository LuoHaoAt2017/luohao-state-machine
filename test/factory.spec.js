import ControlTypes from '@/control/types';
import BaseControl from "@/control/base-control";
import FormTextbox from '@/control/form-control/form-textbox';
import { factoryBuilder } from '@/control';
import controlFactory from '@/control/form-control';

describe("测试控件工厂方法", () => {

  const formInstance = {};
  const updateView = () => {};
  const factory = factoryBuilder(formInstance, updateView);

  test("controlFactory", () => {
    const TextboxCtor = controlFactory(ControlTypes.FormTextBox);
    expect(typeof TextboxCtor.prototype.$initValue === 'function').toBeTruthy();
  });

  test("FormTextbox", () => {
    const control = factory({
      Controlkey: ControlTypes.FormTextbox,
      DataField: 'F00006',
      DisplayRule: '1 > 2',
      DisplayRuleFields: []
    }, {});
    expect(control instanceof FormTextbox).toBeFalsy();
  });
});