[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[![NPM][npm-download-image]][npm-url]

# mock-session
Create required session object for testing, which is used with cookie-session.

If you are using mocha + express + cookie-session and you need to set desired session object in tests or somewhere than
this packge can be helpful.

`npm install mock-session`

```
mockSession('Session name of cookie-session',    
            'first key of cookie-session',      
            'data you need to add in session'     
          );
```


# Example
```
let mockSession = require('mock-session');
let cookie = mockSession('my-session', 'my-secret', {"count":1});   
.
.
.
await request(app).get('api/images/create')
        .set('cookie', [cookie])
        .expect(200);
```

Controller Side:
  You'll receive session object like this

```
exports.create = function(req, res) {         
  if(req.session.count == 1) { // true                      
    //do something                
    res.sendStatus(200);                    
  }
}
```

[npm-image]: https://img.shields.io/npm/v/mock-session.svg
[npm-url]: https://www.npmjs.com/package/mock-session
[npm-download-image]: https://nodei.co/npm/mock-session.png?downloads=true&downloadRank=true
[downloads-image]: https://img.shields.io/npm/dm/mock-session.svg
[downloads-url]: https://www.npmjs.com/package/mock-session
