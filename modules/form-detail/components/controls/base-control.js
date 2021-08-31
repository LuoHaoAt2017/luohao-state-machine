
export default {
  props: {
    control: {
      default: () => {
        return {
          lable: '基础控件',
          value: null,
          field: ''
        }
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    value: {
      get() {
        return this.control.value;
      },
      set(val) {
      }
    },
    field() {
      return this.control.field;
    },
    label() {
      return this.control.label;
    },
  },
  methods: {

  }
}