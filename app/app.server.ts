import * as express from 'express';
import * as argv from './services/argv';
import {
  Api
} from './api';
import {
  ExpressConfig
} from './config/express';
import {
  Modules
} from './config/modules';
/* config */
import {
  Logger
} from './services/logger';
/**
 * The server.
 *
 * @class Server
 */
declare let global;
export class Server {
  /**
  * Constructor.
  *
  * @class Server
  * @constructor
  */
  constructor() {
    // create expressjs application
    this.app            = express();
    this.expressConfig  = new ExpressConfig(this.app);
    this.api            = new Api(this.app);
    this.expressConfig.loadExpressConfig();

    /* api here */
    this.api
    .userApi()

    /* fb login here */
      this.api
      .loginFacebook()

      this.api
      .getToken()

      this.api
      .changeToLongLiveToken()

      this.api
      .homePage()

    /* midlleware here */
    this.expressConfig.loadExpressMiddleware();

    /* load db here */

    process.on('unhandledRejection', (reason, p) => {
      new Logger('app.server.ts[api/room][72]', p, 'error');
      new Logger('app.server.ts[api/room][72]', 'REASON: ' + reason, 'error');
    });
  }

  public app : express.Application;
  public expressConfig : ExpressConfig;
  public api : Api;
  public modules = Modules.get();
  static bootstrap() : Server;
  /**
  * Bootstrap the application.
  *
  * @class Server
  * @method bootstrap
  * @static
  * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
  */
  public static bootstrap() {
    return new Server();
  }

  getExpressInstance() {
    return this.app;
  }
}

Server.bootstrap();
