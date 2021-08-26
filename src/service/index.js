import Dispatcher from './dispatcher';
import Calculator from './calculator';
import { factoryBuilder } from '../control';
const formMap = new Map();

function FormLogic(options) {
  this.$dispatcher = new Dispatcher(this);
  this.$calculator = new Calculator(this);
  registerControls(this, options);
}

function registerControls(form, options) {
  const { ReturnData, UpdateView } = options;
  const ImplControl = factoryBuilder(form, UpdateView);
  for(let field in ReturnData) {
    if (Object.prototype.hasOwnProperty.call(ReturnData, field)) {
      if (ReturnData[field]) {
        form[field] = new ImplControl(ReturnData[field]);
      }
    }
  }
}

function newInstance(options) {
  const form = new FormLogic(options);
  formMap.set(options.ObjectId, form);
}

export default {
  newInstance
}