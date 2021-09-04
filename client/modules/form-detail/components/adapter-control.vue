<script>
import FormNumber from './controls/form-number.vue';
import FormTextbox from './controls/form-textbox.vue';
import { ControlType } from '../config/form-control-type';
export default {
  name: 'AdapterControl',
  components: {
    FormNumber,
    FormTextbox
  },
  props: {
    control: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    controlType() {
      return this.control.dataType;
    }
  },
  created() {

  },
  render(h) {
    if(this.controlType === ControlType.FormTextbox) {
      return h(FormTextbox, {
        staticClass: 'adapter-control',
        props: {
          control: this.control
        }
      });
    } else if (this.controlType === ControlType.FormNumber) {
      return h(FormNumber, {
        staticClass: 'adapter-control',
        props: {
          control: this.control
        }
      });
    } else {
      return h('div', {
        staticClass: 'adapter-control',
        props: {
          control: this.control
        }
      });
    }
  },
  mounted() {

  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.adapter-control {
  width: 100%;
  margin-bottom: 10px;
}
</style>