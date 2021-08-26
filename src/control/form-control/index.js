
function controlFactory(controlKey) {
  switch(controlKey) {
    case 'FormTextbox': 
      return require('./form-textbox.js').default;
    case 'FormNumber': 
      return require('./form-number.js').default;
  }
}

export default controlFactory;