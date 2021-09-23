import Customapis from '@/service/customapis';

const javascript = `$.JForm = {
  BeforeSubmit() {
    return 'BeforeSubmit';
  },
  AfterSubmit() {
    $.IOpenLink('https://juejin.cn/user/1662117314566846/');
    return 'AfterSubmit';
  }
};`;

describe('构造自定义函数对象', () => {

  const customapis = new Customapis({}, javascript);

  test('BeforeSubmit 自定义代码测试', () => {
    expect(customapis.BeforeSubmit()).toBe('BeforeSubmit');
  });

  test('AfterSubmit 自定义代码测试', () => {
    expect(customapis.AfterSubmit()).toBe('AfterSubmit');
  });
});