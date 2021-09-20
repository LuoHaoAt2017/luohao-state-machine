import Dispatcher from './dispatcher';
import Calculator from './calculator';
import Customcode from './customcode';
import { factoryBuilder } from '../control';
import FormDetail from '../models/index';
const Namespace = ['Form', 'ViewModel'];
const formCache = new Map();

function FormLogic(options) {
  this.$dispatcher = new Dispatcher(this);
  this.$calculator = new Calculator(this);
  this.$customcode = new Customcode(this);
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

export function addModule(store, formData) {
  const objectId = formData.objectId;
  store.registerModule([...Namespace, objectId], FormDetail);
}

export function newInstance(options) {
  const form = new FormLogic(options);
  formCache.set(options.ObjectId, form);
}
