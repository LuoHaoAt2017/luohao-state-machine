<template>
  <div class="form-textbox">
    <a-input disabled></a-input>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="less">
.form-textbox {
  width: 100%;
  .ant-input {
    width: 100%;
  }
  .ant-input[disabled] {
    background-color: #fff;
    cursor: grab;
  }
}
</style>