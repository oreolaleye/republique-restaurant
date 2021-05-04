const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const creds = require ("./config")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail.com',
    // port: 465,
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/reservations", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone; 
    const date = req.body.date;
    const time = req.body.time;
    const guest = req.body.guest;
    const type = req.body.type;
    const mail = {
      from: name,
      to: "olaleyeoreoluwa@yahoo.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Date: ${date}</p>
             <p>Time: ${time}</p>
             <p>Guest: ${guest}</p>
             <p>Type: ${type}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });