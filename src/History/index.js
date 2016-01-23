let events = {
	history: {
		// get_entries: "history.get_entries",
		// set_entries: "history.set_entries"
	}
}

let tasks = [
	// 	{
	// 	name: events.history.get_entries,
	// 	handler: 'getEntries'
	// }, {
	// 	name: events.history.set_entries,
	// 	handler: 'setEntries'
	// }
]


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