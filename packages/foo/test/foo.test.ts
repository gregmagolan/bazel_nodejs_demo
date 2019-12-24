import { Foo } from '../index';

describe('foo test suite', () => {
  it('should return foo', () => {
    expect(Foo.foo()).toEqual('foobar');
    const foo = new Foo();
    expect(foo.special()).toEqual('foobar');
    expect(foo.more_special()).toEqual('foobar');
  })
});
