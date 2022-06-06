const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");
const port = 3000;
app.use(bodyparser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  console.log("post request started");

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "earnest.hilll95@ethereal.email", // generated ethereal user
      pass: "W1bwYf6a9r4FCvx55q", // generated ethereal password
    },
  });
  const msg = {
    from: '"The Express app" <theExpressapp@example.com>', // sender address
    to: `saketsharma@gmail.com`, // list of receivers
    subject: "Dinomo Movie_rental", // Subject line
    text: "Welcome to My blog. Thank you for visiting my blog", // plain text body
  };
  // send mail with defined transport object
  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  res.send("Email sent");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
