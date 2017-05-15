"use strict";
const CLIEngine = require("eslint").CLIEngine;

const cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

// lint the supplied text and optionally set
// a filename that is displayed in the report
var report = cli.executeOnText("test.js");
console.dir(report);