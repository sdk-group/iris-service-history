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
	}
	launch() {
		this.emitter.on('history.log', ({
			subject,
			object,
			event_name,
			reason
		}) => {
			// console.log("HISTORY!", subject, object, event_name, reason);
			this.actionSetEntry({
				subject,
				object,
				event_name,
				reason
			});
		});
		return Promise.resolve(true);
	}

	//API
	actionGetEntries({
		query
	}) {
		return this.iris.getEntry({
			query
		});
	}

	actionMakeEntry({
		subject,
		object,
		event_name,
		reason
	}) {
		let time = moment.utc()
			.format('x');
		let r = _.random(4654);
		let id = `history-${r}-${time}`;
		let entry = {
			id,
			subject,
			object,
			event_name,
			reason,
			time
		};
		return Promise.resolve(this.iris.makeEntry(entry));
	}

	actionSetEntry({
		subject,
		object,
		event_name,
		reason
	}) {
		let time = moment.utc()
			.format('x');
		let r = _.random(4654);
		let id = `history-${r}-${time}`;
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
				// console.log("HST SET", res);
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
