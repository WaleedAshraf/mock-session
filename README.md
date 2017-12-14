# mock-session
Create required session object for testing, which is used with cookie-session.

If you are using mocha + express + cookie-session and you need to set desired session object in tests or somewhere than
this packge can be helpful.

`npm install mock-session`

mockSession('Session name of cookie-session', 'first key of cookie-session', 'data you need to add in session');


# Example
```
let mockSession = require('mock-session');
let cookie = mockSession('my-session', 'my-secret', {"count":1});
.
.
.
await request(app).get('api/images')
        .set('cookie', [cookie])
        .expect(200);
```

Controller Side:
  You'll receive session object like this

```
function create(req, res) {         
  if(req.session.count == 1) { // true          
    //do something              
    res.sendStatus(200);                    
  }
}
```
