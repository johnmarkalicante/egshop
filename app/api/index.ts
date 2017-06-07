/* user */
import {
  Registration
} from './user/registration';
import {
  Login
} from './user/login';
import {
  Home
} from '../pages/home/home';

export class Api {

  constructor(private _app : any /*express.Application*/) {

    this._registration = new Registration(this._app);
    this._socialLogin = new Login(this._app);
    this._homepage = new Home(this._app);

  }

  private _registration : Registration;
  private _socialLogin  : Login;
  private _homepage  : Home;

  /* user api below */
  userApi() {
    // this._registration.saveOne();
    // return this;
  }

  loginFacebook() {
    this._socialLogin.facebook();
    return this;
  }

  getToken() {
    this._socialLogin.getToken();
    return this;
  }

  changeToLongLiveToken() {
    this._socialLogin.changeToLongLiveToken();
    return this;
  }

  homePage() {
    this._homepage.home();
    return this;
  }
}
