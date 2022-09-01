//#!usr/bin/env node
exports.seconds = (s) => {
	return s * 1000
}
exports.minutes = (m) => {
	return m * 60 * 1000
}
exports.hours = (h) => {
	return h * 60 * 60 * 1000
}
exports.days = (d) => {
	return d * 24 * 60 * 60 * 1000
}

module.exports = (time) => {
	return {
		days:		time / 24 / 60 / 60 / 1000,
		hours:		time / 60 / 60 / 1000,
		minutes:	time / 60 / 1000,
		seconds:	time / 1000,
		ms:		time
	}
}
