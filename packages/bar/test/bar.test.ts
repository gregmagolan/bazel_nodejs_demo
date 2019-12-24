import { Bar } from '../index';

describe('bar test suite', () => {
  it('should return bar', () => {
    expect(Bar.bar()).toEqual('bar');
  })
});
