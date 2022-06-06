// function createPerson(...props) {
//   let Person = {
//     name: props[0],
//     age: props[1],
//     comp: props[2],
//   };
//   console.log(Person);
//   return Person;
// }
// createPerson("komal", 12, "vast");

function createPerson(...props) {
  let Person = {
    name: props[0],
    age: props[1],
    comp: props[2],
  };
  console.log(Person);
  return Person;
}
createPerson("Saket", 12, "Vast");
