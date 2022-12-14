const nodemailer = require("nodemailer");
const { mailConfig } = require("./../config");
const { baseLogger } = require("../logger");
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b6695e458f195d",
    pass: "95033326e19078"
  }
  
});

/**
 *
 * @param {{first_name:string,last_name:string,password:string,email:string}} user
 */
const sendWelcomeEmail = (user) => {
  console.log(user);
  const mailOptions = {
    from: "webstaff-company@web.co.ke",
    to: user.email,
    subject: "Welcome to Webstaff",
    text: `
    Welcome ${user.first_name} ${user.last_name} to Webstaff.\n
    We are glad to have you on board.\n 
    use your email: ${user.email} and password: ${user.password} to login to your account\n`,
  };

  const info = transporter.sendMail(mailOptions);
  return info;
};
/**
 * Send a password reset email to the user
 * @param {{token:string}} user
 */
const sendPasswordResetEmail = async (user) => {
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

module.exports = {
  sendWelcomeEmail,
  sendPasswordResetEmail,
};
