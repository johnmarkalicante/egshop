import {
  Modules
} from './modules';
import * as args from '../services/argv';

export const port = process.env.port || args.getArgv('--port') || '8082';
let path          = `$dirname`;
path              = Modules.get().path.dirname(path)
export const root = path;

export const apiVersion = '/api/v1/';
export const sha256  = {
  secret : process.env.ENCODEDHASH || '6e259c44f97ff663ab5f4668a6134a2e63a71877956464c9c3820f17a0893c19',
}

export const cipher = {
  algorithm: process.env.ALGORITHM || 'aes-256-ctr',
  secret : process.env.ENCODEDHASH || '6e259c44f97ff663ab5f4668a6134a2e63a71877956464c9c3820f17a0893c19'
}

export const fbCredentials = {
  'clientID'    : '178559469337276', // your App ID
  'clientSecret': '1a29b69d8cc4122d7e453d8ac3414ea6', // your App Secret
  'callbackURL' : 'http://localhost:8082/fb/login',
  'profileURL'  : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
  'fbURL'       : 'https://www.facebook.com/login.php?login_attempt=1'
}
