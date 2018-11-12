### How use JWT with NodeJS

##Dependencies
install jsonwebtoken
```
npm install jsonwebtoken
```

install bcryptjs
```
npm install bcryptjs --save
```

install express
```
npm install express --save
```

### url
* /api (get)
* /api/posts (post)
* /api/login (post)


###
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InVzZXJkZW1vIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIn0sImlhdCI6MTU0MTEwMTg3MywiZXhwIjoxNTQxMTA1NDczfQ.XfniP-Xx47ZCmQEW7vApJToivesJD3PJXxJN1VOYU_w

Get Token:
```
curl -s -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' --data '{"id":"1","username":"userdemo","email":"test@test.com"}' http://127.0.0.1:5000/api/login
```

Pass Token
```
curl -X POST --header "Accept:application/json" http://127.0.0.1:5000/api/posts -k --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InVzZXJkZW1vIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIn0sImlhdCI6MTU0MTEwNDEyMSwiZXhwIjoxNTQxMTA3NzIxfQ.ulo93sMZiMuB4dG8YEPiSQkR8NJc_EubRr5odnuVrsE"
```