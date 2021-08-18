import * as Service from './service/index';


function register(store, data, opts) {
  const objectId = opts.objectId;
  opts.updateView = function(mutation, playload) {
    store.commit(`${mutation}/${objectId}`, playload);
  }
  const service = Service.newInstance(data, opts);
  return service;
}

function restore() {

}

function destory() {

}

export {
  register, 
  restore,
  destory
}