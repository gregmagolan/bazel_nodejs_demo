import { Bar } from '../main';

console.log("__dirname", __dirname);
console.log("cwd()", process.cwd());

describe('bar test suite', () => {
  it('should return bar', () => {
    expect(Bar.bar()).toEqual('bar');
    const bar = new Bar();
    expect(bar.special()).toEqual('bar');
  })
});
