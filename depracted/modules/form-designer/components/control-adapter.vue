<script>
import FormNumber from "./form-number.vue";
import FormTextbox from "./form-textbox.vue";
import FormSelect from "./form-select.vue";
import ControlTitle from "./control-title.vue";
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
    const that = this;
    switch (this.control.control_type) {
      case ControlType.FormTextbox:
        return h(
          "li",
          {
            staticClass: "adapter-control",
          },
          [
            h(ControlTitle, {
              props: {
                control: this.control,
              },
              on: {
                delete() {
                  that.$emit("delete", that.control);
                },
                copy() {
                  that.$emit("copy", that.control);
                },
              },
            }),
            h(FormTextbox, {
              staticClass: "control-value",
            }),
          ]
        );
      case ControlType.FormNumber:
        return h(
          "li",
          {
            staticClass: "adapter-control",
          },
          [
            h(ControlTitle, {
              props: {
                control: this.control,
              },
              on: {
                delete() {
                  that.$emit("delete", that.control);
                },
                copy() {
                  that.$emit("copy", that.control);
                },
              },
            }),
            h(FormNumber, {
              staticClass: "control-value",
            }),
          ]
        );
      case ControlType.FormSelect:
        return h(
          "li",
          {
            staticClass: "adapter-control",
          },
          [
            h(ControlTitle, {
              props: {
                control: this.control,
              },
              on: {
                delete() {
                  that.$emit("delete", that.control);
                },
                copy() {
                  that.$emit("copy", that.control);
                },
              },
            }),
            h(FormSelect, {
              staticClass: "control-value",
            }),
          ]
        );
      default:
        h("li", {
          staticClass: "adapter-control",
        });
    }
  },
};
</script>
<style lang="less" scoped>
.adapter-control {
  width: 100%;
  position: relative;
  cursor: grab;
  padding: 10px;
  &:hover {
    box-shadow: 0 0 1px 1px #ccc;
    border-radius: 4px;
  }
}
.control-ghost {
  box-shadow: 0 0 2px 2px #ccc;
}
</style>