import ControlTypes from '@/control/types';
// import BaseControl from "@/control/base-control";
// import FormTextbox from '@/control/form-control/form-textbox';
import { factoryBuilder } from '@/control';

const formInstance = {};
const updateView = () => {};
const factory = factoryBuilder(formInstance, updateView);


const control = factory({
  Controlkey: ControlTypes.FormTextbox,
  DataField: 'F00006',
  DisplayRule: '1 > 2',
  DisplayRuleFields: []
}, {});

console.log('control: ', control);