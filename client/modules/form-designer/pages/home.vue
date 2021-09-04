<template>
  <div class="home">
    表单设计器
  </div>
</template>
<script>
import { Collapse, Button, Icon, Modal, Row, Col, Input } from "ant-design-vue";
export default {
  name: "home",
  components: {
    AButton: Button,
    ACollapse: Collapse,
    ACollapsePanel: Collapse.Panel,
    AIcon: Icon,
    AModal: Modal,
    ACol: Col,
    ARow: Row,
    ATextArea: Input.TextArea,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style lang="less">
.home {
}
</style>
<style lang="less" scoped>
</style>