import { Extends, Expect } from "@total-typescript/helpers";

type BaseType = {
  id: string;
  createdAt: Date;
};

type User = {
  name: string;
  email: string;
} & BaseType;

type Product = {
  name: string;
  price: number;
} & BaseType;

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
