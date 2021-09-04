<template>
  <div class="form-select">
    <a-select disabled></a-select>
  </div>
</template>
<script>
import { Select } from "ant-design-vue";
export default {
  components: {
    ASelect: Select,
    ASelectOption: Select.Option,
  },
};
</script>
<style lang="less">
.form-select {
  width: 100%;
  .ant-select {
    width: 100%;
  }
  .ant-select-disabled {
    .ant-select-selection {
      background-color: #fff;
    }
  }
}
</style>