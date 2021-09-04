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
      title="新建表单"
      width="80%"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>新建表单</p>
    </a-modal>
  </div>
</template>
<script>
import { Collapse, Button, Icon, Modal } from "ant-design-vue";
export default {
  name: "home",
  components: {
    AButton: Button,
    ACollapse: Collapse,
    ACollapsePanel: Collapse.Panel,
    AIcon: Icon,
    AModal: Modal,
  },
  data() {
    return {
      text: "hello world",
      activeKey: [],
      visible: false,
      app_list: [
      ],
    };
  },
  mounted() {
    this.getApps();
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.visible = false;
    },
    handleCancel(e) {
      this.visible = false;
    },
    getApps() {
      this.$axios.request('/search').then((res) => {
        console.table(res.data);
        this.app_list = res.data;
      }).catch((err) => {
        console.error(err);
      });
    }
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