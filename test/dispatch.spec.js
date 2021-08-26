import store from './store/index';
import datas from './mocks/index';
import { register } from '@/index';
import { beforeAll } from '@jest/globals';

describe('发布订阅模式测试', () => {

  let formInstance;

  beforeAll(() => {
    formInstance = register(store, datas);
  });

  test('2 > 1', () => {
    expect(2 > 1).toBeTruthy();
  });
});