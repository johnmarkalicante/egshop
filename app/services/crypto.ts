import * as crypto from 'crypto';
import * as Const from './../config/const';

export class Crypto {
  constructor() {}

  encrypt (password : any) {
    let hash = crypto.createHmac('SHA256', Const.sha256.secret).update(password).digest('hex');

    return hash;
  }

  cipher(text) {
    let cipher = crypto.createCipher(Const.cipher.algorithm, Const.cipher.secret)
    let crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');

    return crypted;
  }

  decipher(text) {
    let decipher = crypto.createDecipher(Const.cipher.algorithm, Const.cipher.secret)
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  }
}
