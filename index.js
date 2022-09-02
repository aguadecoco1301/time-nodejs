//#!usr/bin/env node
let seconds = (s) => {
	return s * 1000
}
let minutes = (m) => {
	return m * 60 * 1000
}
let hours = (h) => {
	return h * 60 * 60 * 1000
}
let hoursdays = (d) => {
	return d * 24 * 60 * 60 * 1000
}
let	build = (time) => {
		return {
			days:		time / 24 / 60 / 60 / 1000,
			hours:		time / 60 / 60 / 1000,
			minutes:	time / 60 / 1000,
			seconds:	time / 1000,
			ms:		time
		}
}

module.exports = {
	seconds,
	minutes,
	hours,
	days,
	build
}
