<template>
  <div class="home">
    <header>
      <a-button type="danger" icon="rollback" @click="goBack">返回</a-button>
      <h2>表单设计器</h2>
      <a-button type="primary" icon="save">保存</a-button>
    </header>
    <body class="container">
      <div class="control-items">
        <h3>基础控件</h3>
        <ul id="controlItem">
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
      </div>
      <div class="form-controls">
        <ul id="formControl" class="control-list">
          <control-adapter
            v-for="item of controls"
            :key="item.control_code"
            :control="item"
            @delete="onDelete"
            @copy="onCopy"
          ></control-adapter>
        </ul>
      </div>
      <div class="form-settings">
        <a-tabs
          default-active-key="1"
          @change="onChange"
        >
          <a-tab-pane key="1" tab="控件属性">
            Content of Tab Pane 1
          </a-tab-pane>
          <a-tab-pane key="2" tab="表单属性">
            Content of Tab Pane 2
          </a-tab-pane>
        </a-tabs>
      </div>
    </body>
  </div>
</template>
<script>
import {
  Collapse,
  Button,
  Icon,
  Modal,
  Row,
  Col,
  Input,
  Tabs,
} from "ant-design-vue";
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
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
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
    new Sortable(document.querySelector("#formControl"), {
      // group: {
      //   name: "shared",
      //   pull: false,
      //   put: true,
      // },
      handle: ".adapter-control",
      ghostClass: ".control-ghost",
      sort: true,
      onMove() {},
      onAdd(evt) {
        const clone = evt.clone;
        console.log("evt: ", evt);
      },
      onClone(evt) {},
      onEnd(evt) {
        console.log("from: ", evt.from);
        console.log("to: ", evt.to);
      },
    });
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
    onDelete() {},
    onCopy() {},
    onChange() {},
    goBack() {
      const app_code = this.app_code;
      window.location.href = `${window.origin}/index.html#/table?app_code=${app_code}`
    }
  },
};
</script>
<style lang="less">
.home {
  body {
    .form-settings {
      .ant-tabs-nav {
        .ant-tabs-tab {
          width: 144px;
          text-align: center;
        }
      }
    }
  }
}
</style>
<style lang="less" scoped>
.home {
  height: 100%;
  box-sizing: border-box;
  header {
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    h2 {
      margin: 0;
    }
  }
  body {
    display: flex;
    height: calc(100% - 54px);
    border: 1px solid #eee;
    .control-items {
      width: 240px;
      height: 100%;
      h3 {
        height: 54px;
        line-height: 54px;
        padding-left: 12px;
        margin: 0;
        border-bottom: 1px solid #eee;
      }
      li {
        border-bottom: 1px solid #eee;
        height: 42px;
        line-height: 42px;
        padding-left: 8px;
      }
    }
    .form-controls {
      height: 100%;
      padding: 0 12px;
      flex-basis: 320px;
      flex-grow: 1;
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      .control-list {
        padding: 10px;
        li {
          margin-top: 15px;
        }
      }
      .form-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 54px;
        padding: 0 10px;
        border-bottom: 1px solid #eee;
      }
    }
    .form-settings {
      width: 320px;
      height: 100%;
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
}
</style>