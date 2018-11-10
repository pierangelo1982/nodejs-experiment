# User registration

### requirements
bcrypts
```
npm install bcryptjs --save
```

express
```
npm install express --save
```

mongoose
```
npm install mongoose
```

body parser
```
npm install body-parser
```

### api url:
* /api/users (get)
* /api/signup (post)
* /api/delete/:userId (delete)

create:
```
{
    "email":"test@test.com",
    "password":"password"
}
```