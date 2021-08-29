import BaseControl from "./base-control";

export default {
  extends: BaseControl,
  data() {
    return {
      tempValue: null
    }
  },
  watch: {
    value(newVal) {
      this.setTempValue(newVal);
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    setTempValue(val) {
      this.tempValue = val;
    }
  }
}