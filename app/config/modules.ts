import * as path from 'path';
import * as bodyparser from 'body-parser';
import * as bcrypt from 'bcryptjs';
import * as chalk from 'chalk';
import * as compression from 'compression';
import * as fs from 'fs';
import * as jwtsimple from 'jwt-simple';
import * as methodoverride from 'method-override';
import * as moment from 'moment';
import * as morgan from 'morgan';
import * as oboe from 'oboe';
import * as servestatic from 'serve-static';
import * as url from 'url';
import * as request from 'request';
import * as cookieParser from 'cookie-parser';
export class Modules {
  constructor() {}

  static get() {
    return {
      bodyparser    : bodyparser,
      bcrypt        : bcrypt,
      chalk         : chalk,
      compression   : compression,
      fs            : fs,
      path          : path,
      jwtsimple     : jwtsimple,
      methodoverride: methodoverride,
      moment        : moment,
      morgan        : morgan,
      oboe          : oboe,
      servestatic   : servestatic,
      url           : url,
      request       : request,
      cookieParser  : cookieParser,
    }
  }
}
