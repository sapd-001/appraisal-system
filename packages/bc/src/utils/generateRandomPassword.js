/**
 * Generate a random password with the given length of 8 characters upper and lower case letters and numbers
 * and special characters
 * @returns
 */
const generaterandomPassword = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};


module.exports = generaterandomPassword;