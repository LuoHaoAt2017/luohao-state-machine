<template>
  <div class="control-attribute">
    
  </div>
</template>
<script>
import {
  Button,
  Icon,
  Modal,
  Row,
  Col,
  Input,
} from "ant-design-vue";
export default {
  name: 'control-attribute',
  components: {
    AButton: Button,
    AIcon: Icon,
    ACol: Col,
    ARow: Row,
  },
  props: {
    control: {

    }
  }
}
</script>
<style lang="less" scoped>
.control-attribute {
  padding: 10px;
}
</style>