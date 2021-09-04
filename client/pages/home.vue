<template>
  <div class="home">
    <header>
      氚云表单系统
    </header>
    <main>
      <a-collapse v-if="app_list.length" v-model="activeKey" :accordion="true">
        <a-collapse-panel
          :key="app.app_code"
          :header="app.app_name"
          v-for="app in app_list"
        >
          <a-icon slot="extra" type="info-circle" @click.stop="gotoApp(app)" />
          <p>{{ app.app_info }}</p>
        </a-collapse-panel>
      </a-collapse>
      <div v-else class="empty">
        <img :src="icons[0].src" :alt="icons[0].alt">
      </div>
      <a-button class="plus-app" @click="showModal">
        <a-icon type="plus" />
      </a-button>
    </main>
    <a-modal
      title="新建应用"
      width="600px"
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
      icons: [
        {
          src: require('../assets/svg/empty.svg').default,
          alt: 'empty'
        }
      ]
    };
  },
  mounted() {
    this.searchApp();
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    gotoApp(app) {
      this.$router.push({
        name: "tableview",
        params: {
          code: app.app_code,
        },
      });
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
  margin: 0 auto;
  header {
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 24px;
  }
  main {
    width: 100%;
    height: calc(100% - 48px - 36px);
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 36px;
  }
  .empty {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin: 0 auto;
      width: 400px;
      height: 400px;
    }
  }
}
</style>
<style lang="less" scoped>
.home {
  .plus-app {
    position: fixed;
    height: 36px;
    width: 100%;
    bottom: 0;
  }
}
</style>