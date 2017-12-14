/*!
 * mock-session
 * Copyright(c) 2017 Waleed Ashraf
 * MIT Licensed
 */

let Keygrip = require('keygrip');
let Buffer = require('safe-buffer').Buffer;

function MakeCookies(name, keys, data) {
  let cookie = Buffer.from(JSON.stringify(data)).toString('base64'); // base64 converted value of cookie  
  let kg = Keygrip([keys]); // same key as your are using in app
  let hash = kg.sign(name + '=' + cookie);
  return name + '=' + cookie + '; ' + name + '.sig=' + hash + ';';
}

module.exports = MakeCookies