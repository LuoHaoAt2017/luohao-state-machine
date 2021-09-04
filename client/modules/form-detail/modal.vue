<template>
  <a-modal
    :closable="true"
    :visible="visible"
    width="80%"
    @cancel="onClose"
    @ok="onConfirm"
  >
    <div slot="title">数据标题</div>
    <form-adapter
      :appCode="appCode"
      :schemaCode="schemaCode"
      :objectId="objectId"
    ></form-adapter>
  </a-modal>
</template>
<script>
import FormAdapter from "./components/adapter-form.vue";
export default {
  name: "FormModal",
  components: {
    FormAdapter,
  },
  props: {
    appCode: {
      type: String,
      required: true,
    },
    schemaCode: {
      type: String,
      required: true,
    },
    objectId: {
      type: String,
      required: true,
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
    onConfirm() {
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