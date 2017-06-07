import * as Const from '../../config/const';
import {
  User
} from '../../api/user/user';
import {
  Modules
} from '../../config/modules';

export class Home extends User {
  constructor(private _app : any /*express.Application*/) {
    super();
  }

  home() {
    this._app
    .route('/')
    .get((req, res, next) => {
        res.render('index', { title : 'Hello Hugo', cr : __dirname });
    });
  
  } 
}
