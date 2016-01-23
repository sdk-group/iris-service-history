'use strict'

let emitter = require("global-queue");
let HistoryApi = require('resource-management-framework').HistoryApi;

class History {
	constructor() {
		this.emitter = emitter;
	}

	init() {
		this.iris = new HistoryApi();
		this.iris.initContent();
	}

	//API
	actionGetEntries({
		query
	}) {
		console.log("TODO: GET ENTRIES", query);
		return Promise.resolve(true);
	}

	actionSetEntries({
		data
	}) {
		console.log("TODO: SET ENTRIES", data);
		return Promise.resolve(true);
	}
}

module.exports = History;