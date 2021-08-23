import ControlTypes from '@/control/types';
import BaseControl from "@/control/base-control";
import FormTextbox from '@/control/form-control/form-textbox';
import { factoryBuilder } from '@/control/index';

describe("测试控件工厂方法", () => {

  const formInstance = {};
  const updateView = () => {};
  const controlFactory = factoryBuilder(formInstance, updateView);

  test("controlFactory ", () => {
    expect(controlFactory instanceof Function).toBeTruthy();
  });

  const options = {
    controlKey: ControlTypes.FormTextbox
  }
  const $data = {};

  const control = controlFactory(options, $data);
  test("文本控件测试", () => {
    expect(control instanceof FormTextbox).toBeTruthy();
  });
});