# react app setup from scratch using react

## webpack packages:
webpack, webpack-cli, webpack-dev-server

## react packages: 
react, react-dom

## To enable JSX:
babel-loader, babel-preset-react-app,

## in webapck.config.js

```
process.env.BABEL_ENV = 'development'; // important here, or it will emit errors

{
    test: /\.(js|jsx)$/i,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
        presets: [
            ['babel-preset-react-app']
        ]
    }
}
```

