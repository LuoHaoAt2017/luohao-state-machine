<template>
  <a-drawer
    :closable="true"
    :visible="visible"
    width="100%"
    placement="right"
    @close="onClose"
  >
    <div slot="title">
      数据标题
    </div>
    <form-adapter
      :appCode="appCode"
      :schemaCode="schemaCode"
      :objectId="objectId"
    ></form-adapter>
  </a-drawer>
</template>
<script>
import FormAdapter from "./components/adapter-form.vue";
export default {
  name: "FormDrawer",
  components: {
    FormAdapter,
  },
  props: {
    appCode: {
      type: String,
      required: true
    },
    schemaCode: {
      type: String,
      required: true
    },
    objectId: {
      type: String,
      required: true
    },
    callback: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClose() {
      this.visible = false;
      if (this.callback) {
        this.callback();
      }
    },
  },
};
</script>
<style lang="less" scoped>
</style>