const nodemailer = require("nodemailer");
const { baseLogger } = require("../logger");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "jessica" + "@ethereal.email",
    pass: "1" + "2" + "3" + "4" + "5" + "6",
  },
});

const mailOptions = {
  from: "jessica" + "@ethereal.email",
  to: "jessica" + "@ethereal.email",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

/**
 *
 * @param {{first_name:string,last_name:string}} user
 */
module.exports.sendWelcomeEmail = async (user) => {
  const mailOptions = {
    from: "webstaff-company@web.co.ke",
    to: user.email,
    subject: "Welcome to Webstaff",
    text: `Welcome ${user.first_name} ${user.last_name} to Webstaff. We are glad to have you on board.`,
  };
  const info = await transporter.sendMail(mailOptions);
  baseLogger.info("Message sent: %s", info.messageId);
  return info;
};

/**
 * Send a password reset email to the user
 * @param {{token:string}} user
 */
module.exports.sendPasswordResetEmail = async (user) => {
  const mailOptions = {
    from: "webstaff-company@web.co.ke",
    to: user.email,
    subject: "Password Reset",
    text: `Hi ${user.first_name} ${user.last_name},\n\nPlease click on the following link to reset your password:\n\nhttp://localhost:3000/reset/${user.resetPasswordToken}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };
  const info = await transporter.sendMail(mailOptions);
  baseLogger.info("Message sent: %s", info.messageId);
  return info;
};
