//#!usr/bin/env node
let seconds = (seconds) => {
	return seconds * 1000
}
let minutes = (minutes) => {
	return minutes * 60 * 1000
}
let hours = (hours) => {
	return hours * 60 * 60 * 1000
}
let days = (days) => {
	return days * 24 * 60 * 60 * 1000
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
