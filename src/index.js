import ControlTypes from '@/control/types';
// import BaseControl from "@/control/base-control";
// import FormTextbox from '@/control/form-control/form-textbox';
import { factoryBuilder } from '@/control';

function register(store, data, opts) {
  const objectId = opts.objectId;
  opts.updateView = function(mutation, playload) {
    store.commit(`${objectId}/${mutation}`, playload);
  }
  return Service.newInstance(data, opts);
}


const control = factory({
  Controlkey: ControlTypes.FormTextbox,
  DataField: 'F00006',
  DisplayRule: '1 > 2',
  DisplayRuleFields: []
}, {});

console.log('control: ', control);