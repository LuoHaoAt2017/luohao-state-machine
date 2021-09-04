<script>
import FormNumber from "./form-number.vue";
import FormTextbox from "./form-textbox.vue";
import FormSelect from "./form-select.vue";
import ControlTitle from './control-title.vue';
import { ControlType } from "client/typings/form-control-type";
export default {
  name: "AdapterControl",
  components: {
    FormNumber,
    FormTextbox,
    FormSelect,
  },
  props: {
    control: {
      type: Object,
      default: () => {},
    },
  },
  render(h) {
    switch (this.control.control_type) {
      case ControlType.FormTextbox:
        return h('div', {
          staticClass: "adapter-control",
        }, [h(ControlTitle, {
          props: {
            control: this.control
          }
        }), h(FormTextbox, {
          staticClass: 'control-value'
        })]);
      case ControlType.FormNumber:
        return h('div', {
          staticClass: "adapter-control",
        }, [h(ControlTitle, {
          props: {
            control: this.control
          }
        }), h(FormNumber, {
          staticClass: 'control-value'
        })]);
      case ControlType.FormSelect:
        return h('div', {
          staticClass: "adapter-control",
        }, [h(ControlTitle, {
          props: {
            control: this.control
          }
        }), h(FormSelect, {
          staticClass: 'control-value'
        })]);
      default:
        h("div", {
          staticClass: "adapter-control",
        });
    }
  },
};
</script>
<style lang="less" scoped>
.adapter-control {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
</style>