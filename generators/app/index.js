const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
    prompting() {
    // Have Yeoman greet the user.
        this.log(yosay(`Welcome to the ${chalk.red("@hostaworld/koa")} generator!`));

        const prompts = [{
            type: "confirm",
            name: "require_db",
            message: "Do you require mysql db support in this template?",
            default: true,
            store: true,
        }, {
            type: "confirm",
            name: "require_http",
            message: "Do you require HTTP client support (lib request) in this template?",
            default: true,
            store: true,
        }, {
            type: "confirm",
            name: "require_parse_body",
            message: "Do you require parse POST request support in this template?",
            default: true,
            store: true,
        }, {
            type: "confirm",
            name: "require_instant_theme",
            message: "Do you require Instant Theme Support in this template?",
            default: false,
            store: true,
        }];

        return this.prompt(prompts).then((props) => {
            // To access props later use this.props.someAnswer;
            this.props = props;
            let extraPrompts = [];
            if (this.props.require_db) {
                extraPrompts = extraPrompts.concat([{
                    type: "input",
                    name: "db_name",
                    message: "Please provide mysql database name",
                    default: "",
                    store: true,
                }, {
                    type: "input",
                    name: "db_username",
                    message: "Please provide mysql database username",
                    default: "root",
                    store: true,
                }, {
                    type: "input",
                    name: "db_password",
                    message: "Please provide mysql database password",
                    default: "",
                    store: true,
                }, {
                    type: "input",
                    name: "db_host",
                    message: "Please provide mysql database hostname",
                    default: "localhost",
                    store: true,
                }]);
            }

            if (!prompts.length) return;
            return this.prompt(extraPrompts).then((props) => {
                this.props = { ...this.props, ...props };
            });
        });
    }

    writing() {
        this.fs.copy(
            this.templatePath("index.js"),
            this.destinationPath("koa-index.js"),
        );
        this.fs.copy(
            this.templatePath("public/static.html"),
            this.destinationPath("public/static.html"),
        );
        this.fs.copyTpl(
            this.templatePath("src/controllers/index.js"),
            this.destinationPath("src/controllers/index.js"),
            this.props,
        );
        this.fs.copy(
            this.templatePath("src/views/index.html"),
            this.destinationPath("src/views/index.html"),
        );
        this.fs.copyTpl(
            this.templatePath("src/app.js"),
            this.destinationPath("src/app.js"),
            this.props,
        );
        if (this.props.require_db) {
            this.fs.copyTpl(
                this.templatePath("src/db.js"),
                this.destinationPath("src/db.js"),
                this.props,
            );
        }
        if (!this.fs.exists(this.destinationPath("package.json"))) {
            this.fs.copyTpl(
                this.templatePath("package.json"),
                this.destinationPath("package.json"),
                { name: "sample-koa-app" },
            );
        }

        const npmPkgConfig = this.fs.readJSON(this.destinationPath("package.json"));
        npmPkgConfig["@std/esm"] = {
            esm: "all",
            cjs: true,
        };
        npmPkgConfig.engines = {
            node: ">=8.4.0",
        };
        if (!npmPkgConfig.scripts) npmPkgConfig.scripts = {};
        npmPkgConfig.scripts.start = "node -r @std/esm koa-index.js";
        this.fs.writeJSON(this.destinationPath("package.json"), npmPkgConfig);
    }

    install() {
        this.npmInstall([
            "@std/esm",
            "co-views",
            "ejs",
            "koa",
            "koa-compress",
            "koa-logger",
            "koa-route",
            "koa-static",
        ], { save: true });
        if (this.props.require_parse_body) {
            this.npmInstall(["co-body"], { save: true });
        }
        if (this.props.require_instant_theme) {
            this.npmInstall(["koa-instant-theme"], { save: true });
        }
        if (this.props.require_http) {
            this.npmInstall(["request", "request-promise"], { save: true });
        }
        if (this.props.require_db) {
            this.npmInstall(["mysql2", "mysql2-promise"], { save: true });
        }
    }
};
