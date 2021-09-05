<template>
  <div class="table">
    <section class="left">
      <a-button-group class="home">
        <a-button icon="home" size="large" @click="navigateTo('home')">
          首页
        </a-button>
        <a-button icon="plus" size="large" @click="navigateTo('plus')">
          新增表单
        </a-button>
      </a-button-group>
      <a-menu
        style="width: 256px"
        :default-selected-keys="['1']"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
      >
        <a-sub-menu :key="app.app_code" :title="app.app_name">
          <a-menu-item key="1">表单名称</a-menu-item>
          <a-menu-item key="2">表单名称</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </section>
    <section class="right">
      <div class="actions">
        <vxe-button status="primary" circle @click="handleCreate">
          <a-icon type="plus" />
        </vxe-button>
        <vxe-button status="success" circle @click="handleReload">
          <a-icon type="reload" />
        </vxe-button>
        <vxe-button status="danger" circle @click="handleDelete">
          <a-icon type="delete" @click="handleDelete" />
        </vxe-button>
      </div>
      <vxe-table
        ref="Tree"
        v-bind="options"
        row-id="objectId"
        :data="species"
        :tree-config="config"
      >
      </vxe-table>
    </section>
    <a-modal
      title="新建表单"
      width="80%"
      :visible="visible"
      :confirm-loading="loading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>新建表单</p>
    </a-modal>
  </div>
</template>
<script>
import Sortable from "sortablejs";
import moment from "moment";
import { Menu, Button, Modal } from "ant-design-vue";
import { OpenMode } from "../config/form";
import VXETable from "vxe-table";
import Action from "./action.vue";
VXETable.renderer.add("operation", {
  renderDefault(h, opts, params) {
    let { row, column } = params;
    return h(Action, {
      props: {
        row,
        column,
      },
    });
  },
});
export default {
  name: "tableview",
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item,
    AButton: Button,
    AButtonGroup: Button.Group,
    AModal: Modal,
  },
  data() {
    return {
      app: {},
      app_code: '',
      visible: false,
      current: ["mail"],
      openKeys: ["sub1"],
      loading: false,
      options: {
        resizable: true,
        height: "700px",
        border: "full",
      },
      config: {
        expandAll: true,
      },
      columns: [
        {
          type: "seq",
          width: "80",
          headerAlign: "center",
          align: "center",
        },
        {
          type: "checkbox",
          width: "80",
          headerAlign: "center",
          align: "center",
        },
        {
          field: "label",
          title: "物种分类",
          treeNode: true,
          headerAlign: "left",
          align: "left",
        },
        {
          field: "create",
          title: "创建时间",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "update",
          title: "修改时间",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "action",
          title: "数据操作",
          headerAlign: "left",
          align: "left",
          cellRender: {
            name: "operation",
          },
        },
      ],
      species: [
        {
          label: "生物",
          objectId: "001",
          create: moment().format("YYYY-MM-DD"),
          update: moment().format("YYYY-MM-DD"),
          children: [
            {
              label: "动物",
              objectId: "0010",
              create: moment().format("YYYY-MM-DD"),
              update: moment().format("YYYY-MM-DD"),
              children: [
                {
                  label: "无脊椎动物",
                  objectId: "00100",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                  children: [
                    {
                      label: "珊瑚",
                      objectId: "001000",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                    {
                      label: "软体动物",
                      objectId: "001001",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                    {
                      label: "三叶虫",
                      objectId: "001002",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                    {
                      label: "碗石动物",
                      objectId: "001003",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                    {
                      label: "笔石动物",
                      objectId: "001004",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                  ],
                },
                {
                  label: "脊椎动物",
                  objectId: "00101",
                  children: [
                    {
                      label: "鱼形动物",
                      objectId: "001010",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                    {
                      label: "两栖动物",
                      objectId: "001011",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                    {
                      label: "爬行动物",
                      objectId: "001012",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                    {
                      label: "鸟类",
                      objectId: "001013",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                    {
                      label: "哺乳类",
                      objectId: "001014",
                      create: moment().format("YYYY-MM-DD"),
                      update: moment().format("YYYY-MM-DD"),
                    },
                  ],
                },
              ],
            },
            {
              label: "植物",
              objectId: "0011",
              create: moment().format("YYYY-MM-DD"),
              update: moment().format("YYYY-MM-DD"),
              children: [
                {
                  label: "苔藓植物",
                  objectId: "00110",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                },
                {
                  label: "蕨类植物",
                  objectId: "00111",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                },
                {
                  label: "裸子植物",
                  objectId: "00112",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                },
                {
                  label: "被子植物",
                  objectId: "00113",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                },
              ],
            },
            {
              label: "微生物",
              objectId: "0012",
              create: moment().format("YYYY-MM-DD"),
              update: moment().format("YYYY-MM-DD"),
              children: [
                {
                  label: "有孔虫",
                  objectId: "00120",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                },
                {
                  label: "放射虫",
                  objectId: "00121",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                },
                {
                  label: "介形虫",
                  objectId: "00122",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                },
                {
                  label: "牙形虫",
                  objectId: "00123",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                },
                {
                  label: "孢子花粉",
                  objectId: "00124",
                  create: moment().format("YYYY-MM-DD"),
                  update: moment().format("YYYY-MM-DD"),
                },
              ],
            },
          ],
        },
        {
          label: "地质",
          objectId: "002",
          create: moment().format("YYYY-MM-DD"),
          update: moment().format("YYYY-MM-DD"),
        },
        {
          label: "气候",
          objectId: "003",
          create: moment().format("YYYY-MM-DD"),
          update: moment().format("YYYY-MM-DD"),
        },
        {
          label: "陨石",
          objectId: "004",
          create: moment().format("YYYY-MM-DD"),
          update: moment().format("YYYY-MM-DD"),
        },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.loadAppInfo(to.query.app_code);
    });
  },
  mounted() {
    this.loadCols();
    this.sortable();
  },
  methods: {
    handleClick() {},
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    },
    loadCols() {
      const columns = this.columns;
      this.$refs.Tree.loadColumn(columns);
    },
    sortable() {
      const that = this;
      const hook = ".vxe-table--main-wrapper .vxe-table--body tbody";
      const sortable = new Sortable(document.querySelector(hook), {
        handle: ".vxe-body--column.col--seq",
        sort: true, // 列表单元是否可以在列表容器内进行拖拽排序；
        forceFallback: true,
        onMove: function (evt) {
          const draggedId = evt.dragged.getAttribute("rowid");
          const relatedId = evt.related.getAttribute("rowid");
          const father1 = that.getParent(draggedId);
          const father2 = that.getParent(relatedId);
          return father1 === father2;
        },
      });
    },
    getParent(id) {
      const N = this.species.length;
      for (let i = 0; i < N; i++) {
        const elem = this.species[i];
        // 第一层级元素没有父节点
        if (elem.objectId === id) {
          return "";
        } else {
          const result = this.preOrder(elem, id);
          if (result) {
            return result.objectId;
          }
        }
      }
    },
    preOrder(parent, target) {
      const children = parent.children || [];
      for (let i = 0; i < children.length; i++) {
        if (children[i].objectId === target) {
          return parent;
        }
        const res = this.preOrder(children[i], target);
        if (res) {
          return res;
        }
      }
    },
    handleCreate() {
      const appCode = ""; //应用
      const schemaCode = ""; // 表单
      const objectId = ""; // 数据
      window.openFormDetail({
        appCode: appCode,
        schemaCode: schemaCode,
        objectId: objectId,
        openMode: OpenMode.Modal,
        callback: () => {
          console.log("关闭时的回调");
        },
      });
    },
    handleReload() {},
    handleDelete() {},
    loadAppInfo(app_code) {
      this.app_code = app_code;
      this.$axios
        .request({
          url: "/api/application",
          method: "get",
          params: {
            app_code: app_code,
          },
        })
        .then((res) => {
          this.app = res.data;
        })
        .catch((err) => {});
    },
    navigateTo(opt) {
      if (opt === 'home') {
        this.$router.push({
          name: 'home'
        });
      } else if (opt === 'plus') {
        const code = this.app_code;
        // window.replace(`http://localhost:9090/form-designer.html#/?app_code=${code}`);
        window.location.href = `http://localhost:9090/form-designer.html#/?app_code=${code}`
      }
    }
  },
};
</script>
<style lang="less">
.table {
  height: 100%;
  display: flex;
  .ant-menu {
    height: calc(100% - 48px);
  }
  .home {
    height: 48px;
    width: 256px;
    display: flex;
    align-items: center;
    padding: 0 12px;
  }
  .vxe-body--column.col--seq {
    cursor: move;
  }
}
</style>
<style lang="less" scoped>
.table {
  .actions {
    padding: 12px 0;
  }
  .left {
    width: 256px;
    border-right: 1px solid #eee;
  }
  .right {
    width: calc(100% - 256px);
    padding: 0px 16px;
  }
}
</style>