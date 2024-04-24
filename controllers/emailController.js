require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "tovar.beachvolley.club@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: "tovar.beachvolley.club@gmail.com",
    subject: "Contact landing page",
    text: `Nombre:${firstName}\nApellido:${lastName}\nCorreo:${email}\nMensaje:${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: "Email sent successfully",
      url: `${process.env.CLIENT_URL}/success-email`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { sendEmail };
