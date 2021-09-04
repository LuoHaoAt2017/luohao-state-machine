<template>
  <div class="form-number">
    <a-input-number v-model="value">
      <template slot="prefix"></template>
      <template slot="suffix"></template>
    </a-input-number>
  </div>
</template>
<script>
import BaseControl from "./base-control";
export default {
  extends: BaseControl,
  data() {
    return {
      tempValue: null,
    };
  },
  watch: {
    value(newVal) {
      this.setTempValue(newVal);
    },
  },
  created() {},
  mounted() {},
  methods: {
    setTempValue(val) {
      if (!val) {
        this.tempValue = null;
      }
      this.tempValue = val;
    },
    onChange() {},
  },
};
</script>
<style lang="less">
.form-number {
  width: 100%;
  .ant-input-number {
    width: 100% !important;
  }
  label {
    white-space: nowrap;
    padding: 0 10px;
  }
}
</style>