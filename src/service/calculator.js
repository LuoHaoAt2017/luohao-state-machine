import Stack from '../libs/stack';
import Queue from '../libs/queue';

// 运算符
const Operators = /(!==|!=|===|==|&&|\|\||<=|<|>=|>|\+|-|\*|%|!|\/|\(|\))/;
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

// 计算后缀表达式
Calculator.prototype.calcExpression = function (formula, context) {
  // formula = '{F00001} + {F00002}';
  // context = { F00001: 1, F00002: 2};
  // 用于判断表达式是否包含函数计算
  if (funcReg.test(formula)) {
    // 对表达式中的函数求值，并用属性替换
    formula = this.calculateFunc(formula, context);
  }
  const stack = new Stack();
  const items = this.parseExpression(formula);
  debugger;
  for (let i = 0; i < items.length; i++) {
    if (!Operators.test(items[i])) {
      // 非操作符，数值直接进栈
      // stack.push(this.getFieldValue(items[i], context));
      stack.push(items[i]);
    } else {
      let val1, val2;
      if (UnaryOperator.includes(items[i])) {
        val1 = null;
        val2 = stack.pop();
      } else {
        val1 = stack.pop();
        val2 = stack.pop();
      }
      stack.push(this.evalExpression(val1, items[i], val2));
    }
  }
  // 计算完成后最终只可能有一个数在栈中。
  return stack.pop();
}

// 构造后缀表达式
Calculator.prototype.parseExpression = function (expression) {
  // 在操作符两侧添加空白符号，使得所有符号两侧最少有一个空格。
  const Operators = /(!==|!=|===|==|&&|\|\||<=|<|>=|>|\+|-|\*|%|!|\/|\(|\))/;
  const regexp = new RegExp(Operators, 'g');
  // 归一化空格的影响，根据一个或者多个空格将一个表达式进行拆分。
  const items = expression.replace(regexp, ' $1 ').split(/\s+/).filter(elem => elem.length > 0);
  const stack = new Stack(); // 存放操作符 Operators 的栈，栈中不包含数值。
  const queue = new Queue(); // 存放表达式的队列，最终的结果不包含括号，只包括数值和操作符。
  // ((1 +2) *(4+ 5) + 3) * 4
  // 调度场算法：将中缀表达式转换成后缀表达式。
  // 遇到左括号，入栈。
  // 遇到右括号，弹出栈顶元素，加入队列中，直到遇到左括号。弹出左括号，丢弃。
  // 如果不是括号，且栈不为空，比较优先级，如果栈顶运算符优先级大于等当前优先级，先出栈再入队列。
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      while (!stack.empty() && stack.top() !== '(') {
        queue.enqueue(stack.pop());
      }
      stack.pop();// 丢弃左括号
    } else if (Operators.test(item)) {
      // 如果当前操作符比栈顶操作符优先级要高，当前操作符直接入栈。
      // 否则，弹出栈顶符号元素入队列，直到栈顶操作符优先级比当前操作符要小。
      while(!stack.empty() && this.operatorLessThan(item, stack.top())) {
        queue.enqueue(stack.pop());
      }
      stack.push(item);
    } else {
      // 数值直接入队列
      queue.enqueue(item);
    }
  }
  while(!stack.empty()) {
    queue.enqueue(stack.pop());
  }

  return queue.store;
}

// 单目或者双目运算符的计算
Calculator.prototype.evalExpression = function (value1, operator, value2) {
  switch (operator) {
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
    case '||': return value1 || value2;
    case '&&': return value1 && value2;
    case '==': return value1 == value2;
    case '===': return value1 === value2;
    case '!=': return value1 != value2;
    case '!==': return value1 !== value2;
    case '>': return value1 > value2;
    case '>=': return value1 >= value2;
    case '<': return value1 < value2;
    case '<=': return value1 <= value2;
    case '!': return !value2;
    default: return '';
  }
}

// 比较两个符号的优先级
Calculator.prototype.operatorLessThan = function(operator1, operator2) {
  return this.getOperatorLevel(operator1) <= this.getOperatorLevel(operator2);
}

// 定义运算符优先级
Calculator.prototype.getOperatorLevel = function(operator) {
  switch (operator) {
    case '||': return 0;
    case '&&': return 1;
    case '==':
    case '===':
    case '!=':
    case '!==': return 2;
    case '>':
    case '>=':
    case '<':
    case '<=': return 3;
    case '+':
    case '-': return 4;
    case '*':
    case '%':
    case '/': return 5;
    default: return 0;
  }
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

// 计算表达式中的函数
Calculator.prototype.calculateFunc = function(formula, context) {

}

// 获取表达式中 {F0001} 的值
Calculator.prototype.getFieldValue = function(field, context) {
  if (field.startsWith('{') && field.endsWith('}')) {
    field = field.slice(1, -1);
    return context[field];
  }
  return '';
}