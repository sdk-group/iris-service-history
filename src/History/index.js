'use strict'

let events = {
	history: {}
}

let tasks = [];


module.exports = {
	module: require('./history.js'),
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'history',
		shorthands: events.history
	}
};