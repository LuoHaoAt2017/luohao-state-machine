<template>
  <div class="form-textbox">
    <a-input-number :value="value" @change="onChange">
      <template slot="prefix"></template>
      <template slot="suffix"></template>
    </a-input-number>
  </div>
</template>
<script>
import Controller from '../controls/form-textbox';
export default {
  extends: Controller,
  methods: {
    onChange() {

    }
  }
}
</script>
<style lang="less">
.form-textbox {
  width: 100%;
  .ant-input {
    width: 100%;
  }
}
</style>