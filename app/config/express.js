(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./const", "path", "../services/logger", "./modules"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Const = require("./const");
    var path = require("path");
    var logger_1 = require("../services/logger");
    var modules_1 = require("./modules");
    var ExpressConfig = (function () {
        function ExpressConfig(_app) {
            this._app = _app;
            this._modules = modules_1.Modules.get();
        }
        ExpressConfig.prototype.loadExpressConfig = function () {
            var self = this;
            this._app.set('views', path.resolve(__dirname, '../../views'));
            this._app.set('view engine', 'ejs');
            this._app.set('x-powered-by', false);
            this._app.set('port', Const.port);
            this._app.use(modules_1.Modules.get().cookieParser());
            this._app.use(this._modules.servestatic(Const.root + '/dist'));
            this._app.use(this._modules.servestatic(Const.root + '../../views'));
            this._app.use(this._modules.servestatic(path.join(__dirname, "../../views")));
            this._app.use(modules_1.Modules.get().compression());
            process.env.NODE_ENV !== 'test' && this._app.use(modules_1.Modules.get().morgan('dev', {
                skip: function (req, res) {
                    return req.method === 'OPTIONS';
                }
            }));
            this._app.use(modules_1.Modules.get().bodyparser.urlencoded({
                extended: true,
                limit: '50mb'
            }));
            this._app.use(modules_1.Modules.get().bodyparser.json({
                limit: '50mb'
            }));
            this._app.use(modules_1.Modules.get().methodoverride(function (req, res) {
                if (req['body'] && typeof req['body'] === 'object' && '_method' in req['body']) {
                    var method = req['body']._method;
                    delete req['body']._method;
                    return method;
                }
            }));
            this._app.use(function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Credentials', 'false');
                res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
                res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept', +'X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
                if ('OPTIONS' === req.method) {
                    res.sendStatus(200);
                }
                else {
                    next();
                }
            });
            this._app.use(function (req, res, next) {
                res.setTimeout(5000, function () {
                    res.status(408)
                        .send({
                        code: 0,
                        message: 'Request has timed out.'
                    });
                });
                next();
            });
        };
        ExpressConfig.prototype.loadExpressMiddleware = function () {
            var _fbAuth = Const;
            var self = this;
            this._app.use('/api/*', function (req, res, next) {
                new logger_1.Logger('express.config.js[45]', 'Not Found Api --> ' + req.originalUrl, 'error');
                next({ message: 'Not Found Api --> ' + req.originalUrl });
            });
            this._app.use(function (err, req, res, next) {
                if (err) {
                    new logger_1.Logger('express.config.js[50]', err, 'error');
                    res.status(err.status || 500).send({
                        message: err.message,
                        status: err.status || 500
                    });
                }
                else {
                    next();
                }
            });
            process.env.NODE_ENV !== 'test' && this._app.listen(Const.port, function () {
                console.log(self._modules.chalk.red.reset.underline('listening to port ') +
                    self._modules.chalk.cyan.bold((Const.port)));
            });
            process.on('SIGINT', function () {
                setTimeout(function () {
                    process.exit(0);
                }, 300);
            });
        };
        return ExpressConfig;
    }());
    exports.ExpressConfig = ExpressConfig;
});
//# sourceMappingURL=express.js.map