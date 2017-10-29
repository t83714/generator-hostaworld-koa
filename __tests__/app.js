

const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-hostaworld-koa:app", () => {
    beforeAll(() => helpers.run(path.join(__dirname, "../generators/app"))
        .withPrompts({ require_db: true }));

    it("creates files", () => {
        assert.file([
            "dummyfile.txt",
        ]);
    });
});
