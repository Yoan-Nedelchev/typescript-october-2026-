type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

// type NewType = FunctionPropertyNames<test>;

type AllFunctions<T> = Pick<T, FunctionPropertyNames<T>>;

type test = {
  name: string;
  age: number;
  test: () => string;
  test1: () => string;
};
type extracted = AllFunctions<test>