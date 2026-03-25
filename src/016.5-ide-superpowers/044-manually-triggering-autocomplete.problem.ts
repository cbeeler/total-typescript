type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  bar: 1,
  baz: true,
  foo: 'puc'
});

document.addEventListener(
  // Autocomplete this string!
  "dragend",
  (event) => {
    console.log(event);
  },
);
