const nodemailer = require("nodemailer");
const { mailConfig } = require("./../config");
const { baseLogger } = require("../logger");

const transporter = nodemailer.createTransport({
  ...mailConfig,
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
