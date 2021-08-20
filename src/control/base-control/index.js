import { pubsubMixin } from '@/base/control/pub-sub';
import { proxyMixin, initProxy } from '@/base/control/proxy';
import { ruleMixin, initDisplayRule } from '@/base/control/rule';

function BaseControl(options, $data) {
  this.controlKey = options.controlkey; // 控件的类型
  this.dataField = options.dataField; // 控件的编号
  // 响应式属性
  Object.defineProperty(this, 'options', {
    value: $data.options,
    writable: false,
    enumerable: true,
    configurable: false
  });
  // 数据代理
  initProxy(this, $data);
  // 可见性规则
  if (options.Visible) {
    initDisplayRule(this, options.DisplayRule, options.DisplayRuleFields);
  } else {
    this.visible = false;
  }
  // 计算规则和数据联动下一阶段再看
  // initLinkMappingRule
  // initComputationRule
}

proxyMixin(BaseControl);
pubsubMixin(BaseControl);
ruleMixin(BaseControl);
// customEventMixin(BaseControl);

export default BaseControl;