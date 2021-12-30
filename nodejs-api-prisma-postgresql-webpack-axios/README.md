

```
docker run --name demo-postgres -e POSTGRES_PASSWORD=password1234 -p 5432:5432 -d postgres
```

```
docker run -p 8081:80 \
    --name demo-pgadmin \
    --link demo-postgres:db \
    -e 'PGADMIN_DEFAULT_EMAIL=pierangelo1982@gmail.com' \
    -e 'PGADMIN_DEFAULT_PASSWORD=password1234' \
    -d dpage/pgadmin4
    
```





## prisma

- `npm install prisma --save-dev`

- `npm install @prisma/client --save`

- `npx prisma`

- `npx prisma init`


####
install express:

in server.js:
```
const express = require("express")
let  app = express()
app.get('/', (req, res) => res.send("HELLO FROM EXPRESS"));
app.use(express.static('public'))
app.listen(3000,  () => console.log("Example app listening on port 3000!"));
```

create index.html in public folder:
```
<!DOCTYPE html>
<html>
  <head>
    <title>Express React Webpack Babel Setup</title>
  </head>
  <body>
     Hello From Index
    <div id="app"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```

install webpack & c.
```
npm install --save-dev webpack@4.28.3 webpack-dev-server@3.1.14 webpack-cli@3.1.2

npm i -g webpack-cli

npm install --save-dev webpack webpack-dev-server webpack-cli
```

in root directory create `webpack.config.js`
```
module.exports = {
  entry: './js/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
};
```

in `js` folder create `app.js`
```
console.log('My Express React Webpack Babel Setup');
```

### Babel setup

install:
```
npm install --save-dev babel/core@7.2.2 babel/node@7.0.0 babel/cli@7.0.0 babel/preset-react@7.0.0 babel/preset-env@7.2.3 babel/babel-loader@8.0.4

npm install --save-dev @babel/core @babel/node @babel/cli @babel/preset-react @babel/preset-env babel-loader

```

change `webpack.config.js`
```
const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, "js", "app.js"),
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
    }, 
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    }
};
```

create `.babelrc`
```
{
  "presets": [
    "@babel/preset-env", "@babel/react"
  ]
}
```

### react
install react & react dom
```
npm install --save react@16.8.1 react-dom@16.8.1

npm install --save react react-dom

```

update `js/app.js`
```
import React from 'react';
import ReactDOM from 'react-dom';
const title = 'My Simple Express React Webpack Babel Setup Environment';
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
```

### nodemon
```
npm install --save-dev nodemon
```

in start script package.json
```
start: "nodemon --exec babel-node server.js"
```

Now run webpack in one terminal and npm start in another terminal.

```
npm install --save-dev nodemon
```

```
webpack --mode development
```

### tailwindcss
```
npm install tailwindcss --save

npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 --save
```

```
npm install --save @craco/craco
```

```
npx tailwindcss-cli@latest init
```


npm install --save-dev css-loader

npm install --save-dev style-loader
