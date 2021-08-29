<template>
  <div class="home">
    <div class="container">
      <form-number :control="speed" class="common-control">
        <label slot="prefix">速度</label>
      </form-number>
      <form-number :control="times" class="common-control">
        <label slot="prefix">时间</label>
      </form-number>
      <form-number :control="miles" class="common-control">
        <label slot="prefix">距离</label>
      </form-number>
    </div>
  </div>
</template>
<script>
import FormTextbox from "../components/form-textbox.vue";
import FormNumber from "../components/form-number.vue";

export default {
  name: "Home",
  components: {
    FormTextbox,
    FormNumber,
  },
  data() {
    return {
      speed: {
        lable: "数字控件",
        value: null,
        field: "F0001",
      },
      times: {
        lable: "数字控件",
        value: null,
        field: "F0002",
      },
      miles: {
        lable: "数字控件",
        value: null,
        field: "F0003",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSpeed() {},
    onTimes() {},
    onMiles() {},
  },
};
</script>
<style lang="less" scoped>
.container {
  padding: 12px 16px;
  .common-control {
    margin-top: 10px;
  }
}
</style>