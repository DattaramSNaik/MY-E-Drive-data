let names = [
  "Peter",
  "Fini",
  "Dattaram",
  "Rishab",
  "Saket",
  "Saurabh",
  "pradnya",
];

let lang = [
  "JavaScript",
  "GoLang",
  "ReactNative",
  "Kotlin",
  "Ruby",
  "c++",
  "flutter",
  "dart",
];

let getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1));

let feed = (count) => {
  while (count > 0) {
    let emp = {
      name: names[getRandom(0, names.length - 1)],
      language: lang[getRandom(0, lang.length - 1)],
    };

    db.employee.insert(emp);
    // console.log(emp);
    count--;
  }
};

feed(100);
