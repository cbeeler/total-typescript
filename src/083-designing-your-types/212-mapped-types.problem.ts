import { Equal, Expect } from "@total-typescript/helpers";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters<T> = {
  [K in keyof T]: () => T[K];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters<Attributes>,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];
