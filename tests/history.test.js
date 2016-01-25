'use strict'

let History = require("./History/history");
let config = require("./config/db_config.json");

describe("History service", () => {
	let service = null;
	let bucket = null;
	before(() => {
		service = new History();
		service.init();
	});
	describe("History service", () => {
		it("should get history entries", (done) => {
			return service.getEntries()
				.then((res) => {
					console.log(res);
					done();
				})
				.catch((err) => {
					done(err);
				});
		})
		it("should set history entries", (done) => {
			return service.setEntries()
				.then((res) => {
					console.log(res);
					done();
				})
				.catch((err) => {
					done(err);
				});
		})

	})

});