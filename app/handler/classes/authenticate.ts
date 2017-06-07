export class Authenticate {
  constructor() {}
  static auth(req, res, next) {
    if (req.headers.authorization) {

    } else {
      let error    =  <any>new Error('Authentication Fail');
      error.status = 401;

      return next(error);
    }

    return next();
  }
}
