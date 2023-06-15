
const nodemailer = require("nodemailer");

export let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "pawpal.contacto@gmail.com", // generated ethereal user
      pass: "jerbsdxbtpebgksh", // generated ethereal password
    },
  });

