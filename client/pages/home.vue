<template>
  <div class="home">
    <main>
      <a-collapse v-model="activeKey">
        <a-collapse-panel
          :key="app.app_code"
          :header="app.app_name"
          v-for="app in app_list"
        >
          <p>{{ app.app_info }}</p>
        </a-collapse-panel>
      </a-collapse>
      <a-button class="plus-app" @click="showModal">
        <a-icon type="plus" />
      </a-button>
    </main>
    <a-modal
      title="新建应用"
      width="80%"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-row :gutter="[0, 20]">
        <a-col :span="6">
          <label>应用名称</label>
        </a-col>
        <a-col :span="18">
          <a-input v-model="app_name"> </a-input>
        </a-col>
      </a-row>
      <a-row :gutter="[0, 20]">
        <a-col :span="6">
          <label>应用信息</label>
        </a-col>
        <a-col :span="18">
          <a-text-area v-model="app_info"> </a-text-area>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>
<script>
import { Collapse, Button, Icon, Modal, Row, Col, Input } from "ant-design-vue";
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
  },
  data() {
    return {
      text: "hello world",
      activeKey: [],
      visible: false,
      app_list: [],
      app_name: "",
      app_info: "",
    };
  },
  mounted() {
    this.searchApp();
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.visible = false;
      this.createApp(() => {
        this.app_name = "";
        this.app_info = "";
        this.searchApp();
      });
    },
    handleCancel() {
      this.visible = false;
      this.app_name = "";
      this.app_info = "";
    },
    searchApp() {
      this.$axios
        .request({
          url: "/api/application",
          method: "get",
        })
        .then((res) => {
          this.app_list = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    createApp(callback) {
      this.$axios
        .request({
          url: "/api/application",
          method: "put",
          data: {
            app_name: this.app_name,
            app_info: this.app_info,
          },
        })
        .then((res) => {
          callback && callback();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style lang="less">
.home {
  height: 100%;
  main {
    width: 600px;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
<style lang="less" scoped>
.home {
  .plus-app {
    position: fixed;
    height: 36px;
    width: 600px;
    bottom: 0;
    left: 50%;
    margin-left: -300px;
  }
}
</style>