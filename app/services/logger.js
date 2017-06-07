(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "moment", "chalk", "winston", "./argv"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var moment = require("moment");
    var chalk = require("chalk");
    var winston = require("winston");
    var args = require("./argv");
    var Logger = (function () {
        function Logger(file, message, type) {
            this.file = file;
            this.message = message;
            this.type = type;
            if (this.type === 'error' && args.getArgv('--logs')) {
                this.logs()[this.type]({
                    file: file,
                    message: message
                });
            }
        }
        Logger.prototype.logs = function () {
            return new (winston.Logger)({
                transports: [
                    new (winston.transports.Console)({
                        timestamp: function () {
                            return moment().format('MMM Do YY hh:mm:ss A');
                        },
                        prettyPrint: true,
                        formatter: function (options) {
                            var levelColor = 'green';
                            if (options.level === 'warn') {
                                levelColor = 'yellow';
                            }
                            else if (options.level === 'error') {
                                levelColor = 'red';
                            }
                            return chalk.magenta(options.meta.file) + ':' + chalk[levelColor](options.level.toUpperCase()) + ':'
                                + chalk.blue(options.timestamp()) + (options.meta && Object.keys(options.meta).length ? '  ---->  ' +
                                chalk.cyan(JSON.stringify(options.meta.message)) : '');
                        }
                    })
                ]
            });
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
//# sourceMappingURL=logger.js.map