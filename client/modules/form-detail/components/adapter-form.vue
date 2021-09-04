
<script>
import ControlAdapter from "./adapter-control.vue";
import store from "client/store/index";
import { ControlType } from '../config/form-control-type';
import { register } from "@/index";
import { LoadForm } from "form-detail/apis/";
export default {
  name: "AdapterForm",
  components: {
    ControlAdapter,
  },
  props: {
    appCode: {
      type: String,
      required: true,
    },
    schemaCode: {
      type: String,
      required: true,
    },
    objectId: {
      type: String,
      required: true,
    },
    controls: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  created() {
    this.getFormDetail();
  },
  render(h) {
    const children = this.getChildren(h);
    return h(
      "div",
      {
        staticClass: "form-adapter",
      },
      children
    );
  },
  methods: {
    getChildren(h) {
      const vnodes = [];
      const controls = [
        {
          dataField: 'F0001',
          dataType: ControlType.FormTextbox
        },
        {
          dataField: 'F0002',
          dataType: ControlType.FormNumber
        }
      ];
      for (let control of controls) {
        console.log('control: ', control);
        vnodes.push(
          h(ControlAdapter, {
            props: {
              control: control
            },
          })
        );
      }
      return vnodes;
    },
    getFormDetail() {
      LoadForm({
        appCode: this.appCode,
        schemaCode: this.schemaCode,
        objectId: this.objectId,
      }).then((resp) => {
        register(store, resp);
      }).catch((err) => {
        console.error(err);
      });
    },
  },
};
</script>