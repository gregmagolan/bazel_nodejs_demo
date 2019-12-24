import { Bar } from '../main';

describe('bar test suite', () => {
  it('should return bar', () => {
    expect(Bar.bar()).toEqual('bar');
    const bar = new Bar();
    expect(bar.special()).toEqual('bar');
  })
});
