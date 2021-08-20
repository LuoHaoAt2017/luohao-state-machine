import ControlTypes from '../types';

function controlFactory(controlKey) {
  switch(controlKey) {
    case ControlTypes.FormText: return require('./form-text').default;
  }
}

export default controlFactory;