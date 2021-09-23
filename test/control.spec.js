import ControlTypes from '@/control/types';
import FormTextbox from '@/control/form-control/form-textbox';
import controlFactory from '@/control/form-control/index';

describe("测试控件工厂方法", () => {

  test("controlFactory", () => {
    const TextboxCtor = controlFactory(ControlTypes.FormTextbox);
    expect(TextboxCtor).toEqual(FormTextbox);
  });
});