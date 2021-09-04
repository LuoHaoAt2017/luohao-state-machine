<template>
  <div class="container">
    <ul id="controlItem" class="control-items">
      <li>
        <a-icon
          type="plus-circle"
          class="plus-circle"
          @click="handlePlus('form_textbox')"
        />
        文本输入框
      </li>
      <li>
        <a-icon
          type="plus-circle"
          class="plus-circle"
          @click="handlePlus('form_number')"
        />
        数字输入框
      </li>
      <li>
        <a-icon
          type="plus-circle"
          class="plus-circle"
          @click="handlePlus('form_select')"
        />
        下拉输入框
      </li>
    </ul>
    <div class="form-controls">
      <div class="form-save">
        <a-button type="primary">保存</a-button>
      </div>
      <ul id="formControl" class="control-list">
        <li v-for="item of controls" :key="item.control_code">
          <control-adapter :control="item"></control-adapter>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Collapse, Button, Icon, Modal, Row, Col, Input } from "ant-design-vue";
import { ControlType, ControlMap } from "client/typings/form-control-type";
import ControlAdapter from "../components/control-adapter.vue";
import {
  ControlBaseOpts,
  FormControlOpts,
} from "client/typings/form-control-opts";
import Url from "urlparser";
import Sortable from "sortablejs";
export default {
  name: "home",
  components: {
    AButton: Button,
    ACollapse: Collapse,
    ACollapsePanel: Collapse.Panel,
    AIcon: Icon,
    AModal: Modal,
    ACol: Col,
    ARow: Row,
    ATextArea: Input.TextArea,
    ControlAdapter,
  },
  data() {
    return {
      app_code: "",
      controls: {},
      total: 0,
    };
  },
  created() {
    this.getAppCode();
    this.total = Object.keys(this.controls).length;
  },
  mounted() {
    // new Sortable(document.querySelector("#controlItem"), {
    //   easing: "cubic-bezier(1, 0, 0, 1)",
    //   animation: 150,
    //   group: {
    //     name: "shared",
    //     pull: 'clone', // 列表容器内的列表单元可以被移出；
    //     put: false, // 列表容器不可以从其他列表容器内放入列表单元；
    //   },
    //   sort: false, // 列表单元不可以在列表容器内进行拖拽排序；
    // });
    // new Sortable(document.querySelector("#formControl"), {
    //   group: {
    //     name: "shared",
    //     pull: false,
    //     put: true,
    //   },
    //   sort: true,
    //   onMove() {
    //   },
    //   onAdd(evt) {
    //     const clone = evt.clone;
    //     console.log('evt: ', evt);
    //   },
    //   onClone(evt) {
    //   },
    //   onEnd(evt) {
    //     console.log('from: ', evt.from);
    //     console.log('to: ', evt.to);
    //   },
    // });
  },
  methods: {
    getAppCode() {
      const url = Url.parse(window.location.href);
      if (url.query) {
        const app_code = url.query.params.app_code;
        this.app_code = app_code;
        console.log("app_code: ", app_code);
      }
    },
    handlePlus(controlType) {
      let controlOption = {};
      switch (controlType) {
        case ControlMap.FormTextbox:
          controlOption = FormControlOpts[ControlMap.FormTextbox];
          break;
        case ControlMap.FormNumber:
          controlOption = FormControlOpts[ControlMap.FormNumber];
          break;
        case ControlMap.FormSelect:
          controlOption = FormControlOpts[ControlMap.FormSelect];
          break;
      }
      const option = Object.assign({}, ControlBaseOpts, controlOption);
      option.control_code = this.generateCode();
      console.log("control_code: ", option.control_code);
      this.$set(this.controls, option.control_code, option);
    },
    generateCode() {
      this.total = this.total + 1;
      return "F0000" + this.total;
    },
  },
};
</script>
<style lang="less">
.home {
}
</style>
<style lang="less" scoped>
.container {
  display: flex;
  height: 100%;
  .control-items {
    width: 320px;
    height: 100%;
    border-right: 1px solid #eee;
  }
  .form-controls {
    width: 100%;
    height: 100%;
    .control-list {
      padding: 10px;
    }
    .form-save {
      display: flex;
      justify-content: flex-end;
      padding: 5px 10px;
      border-bottom: 1px solid #eee;
    }
  }
}
ul,
li {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding-left: 8px;
  // cursor: grab;
  .plus-circle {
    cursor: pointer;
    margin-right: 8px;
  }
}
</style>