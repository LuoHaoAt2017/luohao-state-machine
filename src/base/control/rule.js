import { RuleType } from '@/utils';

// 一定要先执行隐藏规则，再执行计算规则和填充规则
function executeRule(control, message) {
  // message.excludes 被排除的规则
  if (!message.excludes.includes(RuleType.displayRule)) {
    if (control.$$rules.displayRule) {
      executeDisplayRule(control);
    }
  }
}

// 显示规则
function executeDisplayRule(control) {
  const { rule, fields } = control.$$rules.displayRule;
  if (fields && fields.length > 0) {
    const calculator = control.$form.$calculator;
    const visible = calculator.getDisplayRuleResult(rule, fields, control);
    control.visible = visible;
  }
}

// 填充规则
function executeMappingRule() {

}

// 关联填充规则
function executeLinkMappingRule() {

}

// 计算规则
function executeComputationRule() {

}

function initDisplayRule(control, rule, fields) {
  if (rule && fields) {
    if (control.$$rules) {
      control.$$rules.displayRule = displayRule;
    } else {
      control.$$rules = {
        displayRule: {
          rule, 
          fields
        }
      }
    }
    if (fields.length) {
      // 如果规则中包含其它控件字段，那么当前控件的显示和隐藏取决于其它控件的值。
      control.$subscribe(fields);
      control.$$hasSubs = true;
    } else {
      // 如果规则中不包含其它控件字段，那么当前控件的显示和隐藏取决于计算结果。
      const calculator = control.$form.$calculator;
      const visible = calculator.getDisplayRuleResult(rule, fields, control);
      control.visible = !visible; // 为什么要取反呢
    }
  }
}

export function ruleMixin(control) {
  control.prototype.$handleMesg = function handleMesg(message) {
    executeRule(control, message);
  }
}