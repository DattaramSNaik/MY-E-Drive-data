const express = require("express");
require("./db/conn");
const port = process.env.PORT || 3000;
const userRoutes = require("./public/routes/user");
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.listen(port, () => {
  console.log("Server is running at port " + port);
});
