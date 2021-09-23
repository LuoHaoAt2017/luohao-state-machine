import Dispatcher from './dispatcher';
import Calculator from './calculator';
import Customapis from './customapis';
import Helpers from '../mixins/helpers';
import applyMixins from '../utils/applyMixin';
import { factoryBuilder } from '../control';
import FormDetail from '../models/index';
const Namespace = ['Form', 'ViewModel'];
const formCache = new Map();

function FormLogic(options) {
  this.$dispatcher = new Dispatcher(this);
  this.$calculator = new Calculator(this);
  this.$customapis = new Customapis(this);
  this.renderFields(options);
}

FormLogic.prototype.renderFields = function(options) {
  this.$renderFields = []; // 缓存控件的 field
  const { ReturnData, UpdateView } = options;
  const ImplControl = factoryBuilder(this, UpdateView);
  for(let field in ReturnData) {
    if (Object.prototype.hasOwnProperty.call(ReturnData, field)) {
      if (ReturnData[field]) {
        this[field] = new ImplControl(ReturnData[field]);
        this.$renderFields.push(field);
      }
    }
  }
}

applyMixins(FormLogic, [Helpers]);

export function addModule(store, formData) {
  const objectId = formData.objectId;
  store.registerModule([...Namespace, objectId], FormDetail);
}

export function newInstance(options) {
  const form = new FormLogic(options);
  formCache.set(options.ObjectId, form);
}
