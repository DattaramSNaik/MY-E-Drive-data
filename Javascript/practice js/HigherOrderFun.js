//for-each
//filter
//map
//sort
//reduce
const companies = [
  { name: "Google", category: "product based", year: 1930 },
  { name: "Paytm", category: "product based", year: 1934 },
  { name: "Microsoft", category: "service based", year: 1932 },
  { name: "Facebook", category: "product based", year: 1943 },
  { name: "hp", category: "service based", year: 1944 },
];
const ages = [33, 12, 23, 34, 45, 3, 68, 68, 68, 79, 86, 57, 45, 45];
//foreach
companies.forEach((element) => {
  console.log(element.category);
});
companies.forEach((company, index) => console.log(company));
//filter
const age = ages.filter(function (age) {
  if (age >= 20) {
    return true;
  }
});
console.log(age);

const company = companies.filter(function (com) {
  if (com.category === "service based") {
    return true;
  }
});
console.log(company);
//map
companies.map(function (company, index) {
  console.log(company, index);
});

const cm = companies.map((company, index) => {
  return `${company.name} ${company.category}`;
});
console.log(cm);
//sort
const s = companies.sort((c1, c2) => {
  if (c1.start < c2.start) {
    return -1;
  } else {
    return 1;
  }
});
console.log(s);

const b = ages.sort((c1, c2) => c2 - c1);
console.log(b);
//reduce
