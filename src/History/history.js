'use strict'

let emitter = require("global-queue");
let HistoryApi = require('resource-management-framework')
	.HistoryApi;
let moment = require("moment-timezone");

class History {
	constructor() {
		this.emitter = emitter;
	}

	init() {
		this.iris = new HistoryApi();
		this.iris.initContent();

		this.emitter.on('history.log', ({
			subject,
			object,
			event_name,
			reason
		}) => {
			this.setEntry({
				subject,
				object,
				event_name,
				reason
			});
		});
	}

	//API
	actionGetEntries({
		query
	}) {
		return this.iris.getEntry({
			query
		});
	}

	actionSetEntry({
		subject,
		object,
		event_name,
		reason
	}) {
		let time = moment.utc()
			.format('x');
		let id = `history-${_.random()}-${time}`;
		let entry = {
			id,
			subject,
			object,
			event_name,
			reason,
			time
		};
		return this.iris.setEntry(entry)
			.then((res) => {
				console.log("HST SET", res);
				return {
					success: true
				};
			})
			.catch((err) => {
				console.log("HST ERR", err.stack);
				return {
					success: false
				};
			});
	}
}

module.exports = History;
