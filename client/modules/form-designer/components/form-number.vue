<template>
  <div class="form-number">
    <a-input-number disabled></a-input-number>
  </div>
</template>
<script>
export default {
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
.form-number {
  width: 100%;
  .ant-input-number {
    width: 100% !important;
    background: #fff;
  }
  label {
    white-space: nowrap;
    padding: 0 10px;
  }
}
</style>