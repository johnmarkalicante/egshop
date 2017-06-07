import * as Const from '../../config/const';
import {
  User
} from './user';
import {
  Authenticate
} from '../../handler/classes/authenticate';

export class Registration extends User {
  constructor(private _app : any /*express.Application*/) {
    super();
  }

  saveOne() {
    this._app
    .route(Const.apiVersion + 'user')
    .post(Authenticate.auth, (req, res, next) => {
      res.status(200)
      .send({
        code: 1,
        data: 'success'
      });
    });
  }
 
}
