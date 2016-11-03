'use strict'

let events = {
	history: {}
}

let tasks = [];


module.exports = {
	module: require('./history.js'),
	name: 'history',
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'history',
		shorthands: events.history
	}
};