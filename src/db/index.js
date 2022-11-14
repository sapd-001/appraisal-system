const mongoose = require('mongoose');

const { dbUrl } = require('./../config');

mongoose.connect(dbUrl);

mongoose.connection.on('connected', () => {
	dbLogger.info(
		JSON.stringify({
			message: 'MongoDB connected',
			time: moment().format('LLLL'),
		}),
	);
});
mongoose.connection.on('error', (err) => {
	dbLogger.error(
		JSON.stringify({ time: moment().format('LLLL'), error: err.message }),
	);
});

mongoose.connection.on('disconnected', () => {
	dbLogger.error(
		JSON.stringify({
			time: moment().format('LLLL'),
			message: 'MongoDB disconnected',
		}),
	);
});
mongoose.connection.on('reconnected', () => {
	dbLogger.error(
		JSON.stringify({
			time: moment().format('LLLL'),
			message: 'MongoDB reconnected',
		}),
	);
});

module.exports = mongoose