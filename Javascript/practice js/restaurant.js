let v = [
  {
    name: "Pepperoni",
    size: "small",
    price: 19,
    quantity: 10,
    date: Date("2021-03-13T08:14:30Z"),
  },
  {
    name: "Pepperoni",
    size: "medium",
    price: 20,
    quantity: 20,
    date: Date("2021-03-13T09:13:24Z"),
  },
  {
    name: "Pepperoni",
    size: "large",
    price: 21,
    quantity: 30,
    date: Date("2021-03-17T09:22:12Z"),
  },
  {
    name: "Cheese",
    size: "small",
    price: 12,
    quantity: 15,
    date: Date("2021-03-13T11:21:39.736Z"),
  },
  {
    name: "Cheese",
    size: "medium",
    price: 13,
    quantity: 50,
    date: Date("2022-01-12T21:23:13.331Z"),
  },
  {
    name: "Cheese",
    size: "large",
    price: 14,
    quantity: 10,
    date: Date("2022-01-12T05:08:13Z"),
  },
  {
    name: "Vegan",
    size: "small",
    price: 17,
    quantity: 10,
    date: Date("2021-01-13T05:08:13Z"),
  },
  {
    name: "Vegan",
    size: "medium",
    price: 18,
    quantity: 10,
    date: Date("2021-01-13T05:10:13Z"),
  },
];
let ob = Object.values(v);
console.log((ob[5].size = "regular"));
console.log(ob);
