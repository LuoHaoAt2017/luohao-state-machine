import { Mutations } from '../store/types';

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
        this.$store.commit(Mutations.Input, val);
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