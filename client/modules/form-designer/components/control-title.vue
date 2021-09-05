<template>
  <div class="control-title">
    <div class="control-label">
      {{ control.display_name }}
    </div>
    <div class="control-action">
      <a-icon type="copy" />
      <a-icon type="delete" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    control: {

    }
  },
  created() {},
  mounted() {},
  methods: {
  },
};
</script>
<style lang="less">
.control-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.control-label {
  cursor: grab;
}
.control-action {
  i {
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>