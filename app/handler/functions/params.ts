import {
  Modules
} from '../../config/modules';
let _modules = Modules.get();

module.exports =  (req, res, next) => {
  let query = _modules.url.parse(req.url, true).query;

  req.params = Object.assign({}, req.params, req.body, query);

  next();
}
