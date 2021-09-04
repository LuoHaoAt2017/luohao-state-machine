<template>
  <div class="form-textbox">
    <slot name="prefix"></slot>
    <a-input v-model="tempValue" @blur="onBlur"> </a-input>
    <slot name="suffix"></slot>
  </div>
</template>
<script>
import BaseController from "./base-control";
export default {
  extends: BaseController,
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
  methods: {
    onChange() {},
    onBlur() {
      this.value = this.format(this.tempValue);
    },
    format(value) {
      return parseInt(value);
    },
    setTempValue(val) {
      if (!val) {
        this.tempValue = null;
      }
      this.tempValue = val;
    },
  },
};
</script>
<style lang="less">
.form-textbox {
  width: 100%;
  .ant-input {
    width: 100%;
  }
}
</style>