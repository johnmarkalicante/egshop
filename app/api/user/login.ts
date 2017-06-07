import * as Const from '../../config/const';
import {
  User
} from './user';
import {
  Modules
} from '../../config/modules';

export class Login extends User {
  constructor(private _app : any /*express.Application*/) {
    super();
  }

   /*
  *   Index | Authenticate Login API
  */
  facebook() {
    this._app
    .route('/fb/account')
    .get( (req, res, isToken) => {
      if (req.cookies.u_accessToken) {
        this.tokenExtend(req.cookies.u_accessToken);
        res.render('profile', {
          title : 'Hello Hugo',
          authToken: req.cookies.u_accessToken
        });
      } else {
        res.render('fb_login', { title : 'Welcome' });
      }
    })
  }
  // this.checkTokenExpiration(req, res, next, req.cookies.u_accessToken, 'profile');
  // res.render('index', { title : 'Hello Hugo' });
  /*
  *   Get Token | Get Authenticated Token
  */
  getToken() {
    this._app
    .route('/fb/get/token')
    .get((req, res, next) => {
      let user = {
        _id        : req.query.id,
        _name      : req.query.name,
        _email     : req.query.email,
        _profile   : req.query.profile,
        _authToken : req.query.authToken
      }
      // res.send('a');
      res.redirect('http://localhost:8082/fb/change/token?authToken='+user._authToken);
    });
  }

  /*
  *   Change Token Expiration into 2mons
  */
  tokenExtend(u_accessToken) {
    let fbGraphURL = 'https://graph.facebook.com/oauth/access_token?client_id=';
    fbGraphURL +=Const.fbCredentials.clientID;
    fbGraphURL +='&client_secret='+Const.fbCredentials.clientSecret;
    fbGraphURL +='&fb_exchange_token='+u_accessToken;
    fbGraphURL +='&grant_type=fb_exchange_token';

    Modules.get().request(fbGraphURL, function(err, resp, body) {
      body = JSON.parse(body);
      return body.access_token;
      // res.redirect('/fb/account');
      // res.header("Content-Type",'application/json');
      // res.send(JSON.stringify(body, null, 4));
    });

  }
  changeToLongLiveToken() {
    this._app
    .route('/fb/change/token')
    .get((req, res, next) => {
      // request module is used to process the yql url and return the results in JSON format
      let fbGraphURL = 'https://graph.facebook.com/oauth/access_token?client_id=';
      fbGraphURL +=Const.fbCredentials.clientID;
      fbGraphURL +='&client_secret='+Const.fbCredentials.clientSecret;
      fbGraphURL +='&fb_exchange_token='+req.query.authToken;
      fbGraphURL +='&grant_type=fb_exchange_token';

      Modules.get().request(fbGraphURL, function(err, resp, body) {
        body = JSON.parse(body);
        // res.redirect('/fb/account');
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(body, null, 4));
      });
    });
  }

  /*
  *   Checking Token Expiration
  */
  checkTokenIfExist(req, res, next) {
    next(false);
    // console.log(next);
    console.log(req.cookies.u_accessToken);

  }

  /*
  *   If token was Error Occured
  */
  errorToken(req, res, next, token, render) {
    if(null == token) {
      res.render(render, { title : 'Hello Hugo' });
    } else {
      res.render('index', { title : 'Welcome' });
    }
  }
}
