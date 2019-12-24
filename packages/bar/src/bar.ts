import { Special } from './special';

export class Bar implements Special {
  public static bar(): string {
    return "bar";
  }

  public special(): string {
    return Bar.bar();
  }
}
