import { Bar, Special } from '@bazel_nodejs_demo/bar';
import { MoreSpecial } from './more_special';

export class Foo implements Special, MoreSpecial {
  public static foo(): string {
    return "foo" + Bar.bar();
  }

  public special(): string {
    return Foo.foo();
  }

  public more_special(): string {
    return Foo.foo();
  }
}
