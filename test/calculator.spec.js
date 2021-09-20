import Calculator from '@/service/calculator';
import store from '@mocks/store';

describe('计算规则解析器测试', () => {

  let calculator;

  beforeAll(() => {
    calculator = new Calculator({});
  });

  test('构造后缀表达式', () => {
    const expression = '2 + (1 + 2) *(3 + (4 + 5) * 4)';
    const expected = calculator.parseExpression(expression);
    expect(expected.join('')).toBe('212+345+4*+*+');
  });

  test('计算后缀表达式', () => {
    const expression = '212+345+4*+*+';
    debugger;
    const expected = calculator.calcExpression(expression);
    expect(expected).toBe(146);
  });

  // test('计算规则测试', () => {

  // });

  // test('隐藏规则测试', () => {

  // });

  // test('颜色规则测试', () => {

  // });

});