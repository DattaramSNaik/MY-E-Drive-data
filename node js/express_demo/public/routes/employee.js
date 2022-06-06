const routes = require("express").Router();
const joi = require("joi");
const employee = [
  { id: 1, name: "Akshay" },
  { id: 2, name: "saket" },
  { id: 3, name: "Rishabh" },
  { id: 4, name: "peter" },
  { id: 5, name: "finney" },
];

routes.get("/", (req, res) => {
  res.send(employee);
});

routes.get("/:id", (req, res) => {
  const id = req.params.id;
  const emp = employee.find((e) => e.id === parseInt(id));
  if (!emp) {
    return res.status(404).send({ message: "Employee not found" });
  }

  res.send(emp);
});

routes.post("/", (req, res) => {
  const emp = {
    id: employee.length + 1,
    name: req.body.name,
  };
  const existingEmployee = employee.find((emp) => {
    return emp.name === req.body.name;
  });
  if (existingEmployee) {
    return res.status(202).send("User Already present");
  }
  let { error } = validateEmp(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    employee.push(emp);
  }
  console.log(emp);
  res.send(employee);
});

routes.put("/:id", (req, res) => {
  const id = req.params.id;

  const emp = employee.find((e) => e.id === parseInt(id));
  if (!emp) {
    return res.status(404).send({ message: "Employee not found" });
  }
  let { error } = validateEmp(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    emp.name = req.body.name;
    res.send(employee);
  }
});

routes.delete("/:id", (req, res) => {
  const id = req.params.id;
  const emp = employee.find((e) => e.id === parseInt(id));
  if (!emp) {
    return res.status(404).send({ message: "Employee not there" });
  } else {
    const index = employee.indexOf(emp);
    console.log(index);

    employee.splice(index, 1);

    res.send(employee);
  }
});

function validateEmp(input) {
  const schema = joi.object({
    name: joi.string().min(5).max(50).required(),
  });
  return schema.validate(input);
}
module.exports = routes;
