import ControlTypes from '../types';

function controlFactory(controlKey) {
  switch(controlKey) {
    case ControlTypes.FormTextBox: 
      return require('./form-textbox.js').default;
    case ControlTypes.FormNumber: 
      return require('./form-number.js').default;
  }
}

export default controlFactory;