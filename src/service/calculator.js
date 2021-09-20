import Stack from '../libs/stack';
import Queue from '../libs/queue';

// 运算符
const AllOperator = /(!==|!=|===|==|&&|\|\||<=|<|>=|>|\+|-|\*|%|!|\/|\(|\))/;
const UnaryOperator = ['!']; // 1元运算符集合
// 用于判断表达式是否包含函数计算
const funcReg = /\$\.fn\.(\w*?)\((.*)\)/;

// 计算器
export default function Calculator(formInstance) {
  this.$form = formInstance;
}

// 计算规则
Calculator.prototype.getComputeRuleResult = function (formula, fields, formData) {
  if (formula) {
    const context = this.getRuleContext(fields, formData);
    return this.calcExpression(formula, context);
  }
}

// 隐藏规则
Calculator.prototype.getDisplayRuleResult = function (formula, fields, formData) {

}

// 颜色规则
Calculator.prototype.getColorRuleResult = function (formula, fields, formData) {

}

// 获取上下文
Calculator.prototype.getRuleContext = function (fields, formData) {
  const context = {};
  for (let i = 0; i < fields.length; i++) {
    const curField = fields[i];
    if (Object.prototype.hasOwnProperty.call(formData, curField)) {
      context[curField] = this.formatToArray(formData[curField]);
    }
  }
  return context;
}

// 转换成数组
Calculator.prototype.formatToArray = function (value) {
  if (typeof value === 'number' || typeof value === 'boolean') {
    return [value];
  } else if (Object.prototype.toString.call(value).indexOf('String')) {
    return [value];
  } else if (Object.prototype.toString.call(value).indexOf('Array')) {
    return value;
  } else if (Object.prototype.toString.call(value).indexOf('Object')) {
    return [value];
  } else {
    return value;
  }
}

// 计算表达式
Calculator.prototype.calcExpression = function (formula, context) {
  // formula = '{F00001} + {F00002}';
  // context = { F00001: 1, F00002: 2};
  // 用于判断表达式是否包含函数计算
  if (funcReg.test(formula)) {
    // 对表达式中的函数求值，并用属性替换
    formula = calculateFn(formula, ctx);
  }
  const stack = new Stack();
  const items = this.parseExpression(formula);
  for (let i = 0; i < items.length; i++) {
    if (!AllOperator.test(items[i])) {
      // 非操作符，数值直接进栈
      stack.push(items[i]);
    } else {
      let val1, val2;
      if (UnaryOperator.test(items[i])) {
        val1 = null;
        val2 = stack.pop();
      } else {
        val1 = stack.pop();
        val2 = stack.pop();
      }
      stack.push(this.evalExpression(val1, val2));
    }
  }
  // 计算完成后最终只可能有一个数在栈中。
  return stack.pop();
}

// 后缀表达式
Calculator.prototype.parseExpression = function (expression) {
  // 在操作符两侧添加空白符号，使得所有符号两侧最少有一个空格。
  expression = expression.replace(new RegExp(AllOperator, 'g'), ' $1 ');
  // 归一化空格的影响，根据一个或者多个空格将一个表达式进行拆分。
  const items = expression.split(/\s+/).filter((item) => item.length);
  const stack = new Stack(); // 存放操作符的栈
  const queue = new Queue(); // 存放表达式的队列，最终的结果不包含括号，只包括数值和操作符。
  // ((1 +2) *(4+ 5) + 3) * 4
  // 算法：
  // 遍历 items
  // 遇到左括号，入栈。
  // 遇到右括号，弹出栈顶元素，加入队列中，直到遇到左括号。弹出左括号，丢弃。
  // 如果不是括号，且栈不为空，比较优先级，如果栈顶运算符优先级大于等当前优先级，先出栈再入队列。
  
  return queue.store;
}

// 单目或者双目运算符的计算
Calculator.prototype.evalExpression = function (value1, operator, value2) {
  let result;
  switch (operator) {
    case '+': result = value1 + value2; break;
    case '-': result = value1 - value2; break;
    case '*': result = value1 * value2; break;
    case '/': result = value1 / value2; break;
    case '||': result = value1 || value2; break;
    case '&&': result = value1 && value2; break;
    case '==': result = value1 == value2; break;
    case '===': result = value1 === value2; break;
    case '!=': result = value1 != value2; break;
    case '!==': result = value1 !== value2; break;
    case '>': result = value1 > value2; break;
    case '>=': result = value1 >= value2; break;
    case '<': result = value1 < value2; break;
    case '<=': result = value1 <= value2; break;
    case '!': result = !value2; break;
    default: result = '';
  }
  return result;
}

// 定义运算符优先级
Calculator.prototype.getOperatorLevel = function(operator) {
  switch (operator) {
    case '||': return 0;
    case '&&': return 1;
    case '>':
    case '>=':
    case '<':
    case '<=':
    case '==':
    case '===':
    case '!==':
    case '!=': return 2;
    case '+':
    case '-': return 3;
    case '*':
    case '%':
    case '/': return 4;
    default: return 0;
  }
}