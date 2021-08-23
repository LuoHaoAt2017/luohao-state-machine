import ControlTypes from '../types';

function controlFactory(controlKey) {
  switch(controlKey) {
    case ControlTypes.FormTextBox: 
      return require('./form-textbox').default;
    case ControlTypes.FormNumber: 
      return require('./form-number').default;
  }
}

export default controlFactory;