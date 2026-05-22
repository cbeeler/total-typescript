import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app");

if(appElement === null) {
  throw "app element is null";
}
// How do I ensure that appElement is defined?

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
