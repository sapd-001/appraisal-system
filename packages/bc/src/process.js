/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 12:18:10
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 23:59:50
 * @ Description:
 */

const { processLogger } = require("./logger");

module.exports = () => {
  process.on("uncaughtException", (err, origin) => {
    processLogger.error(`Caught exception: ${err}\nException origin: ${origin}`);
    // if (err!==null) {
    //   processLogger.error(
    //     JSON.stringify({
    //       err: err.message,
    //       origin: origin,
    //     })
    //   );
    // }
  });
  process.on("unhandledRejection", (reason, promise) => {
    const promiseMessage = promise.catch((err = err.message));
    processLogger.error(
      JSON.stringify({
        err: reason,
        promise: promiseMessage,
      })
    );
  });
};
