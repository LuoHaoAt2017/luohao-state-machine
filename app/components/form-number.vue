<template>
  <div class="form-number">
    <slot name="prefix"></slot>
    <a-input :value="tempValue" @change="onChange">
    </a-input>
    <slot name="suffix"></slot>
  </div>
</template>
<script>
import Controller from '../controls/form-number';
export default {
  extends: Controller,
  methods: {
    onChange() {
      
    }
  }
}
</script>
<style lang="less" scoped>
.form-number {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .ant-input-number {
    width: 100%;
  }
  label {
    white-space: nowrap;
    padding: 0 10px;
  }
}
</style>