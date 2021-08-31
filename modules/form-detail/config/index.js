import Vue from 'vue';
import Drawer from '../drawer.vue';
import Modal from '../modal.vue';
import { OpenMode } from 'app/config/form';

function openFormDetail({
  appCode,
  schemaCode,
  objectId,
  openMode,
  callback,
}) {
  let instance;
  const options = {
    props: {
      appCode,
      schemaCode,
      objectId,
      callback: callback
    },
    on: {
      close() {
        document.body.removeChild(instance.$el);
      }
    }
  };
  if (OpenMode.Drawer === openMode) {
    instance = new Vue({
      render(h) {
        return h(Drawer, options);
      }
    }).$mount();
    instance
  } else {
    instance = new Vue({
      render(h) {
        return h(Modal, options);
      }
    }).$mount();
  }
  instance.$children[0].visible = true;
  document.body.appendChild(instance.$el);
}

export default openFormDetail;