'use strict'

let emitter = require("global-queue");
let HistoryApi = require('resource-management-framework').HistoryApi;

class History {
	constructor() {
		this.emitter = emitter;
	}

	init(config) {
		let bname = config.bucket;
		this.iris = new HistoryApi();
		this.iris.init(bname);
	}

	//API
	getEntries() {}
	setEntries() {}
}

module.exports = History;