### Very Simple starter kit

This is very simple project to follow my own workflow. This can be similar from other starter kits but this has been implemented from scratch knowing what is required and what is not required.

Stack used by this project

* [babel](http://github.com/babel/babel) (Using nextgen JS) I have sticked to stage-1
* [webpack](http://github.com/webpack/webpack) (Bundling package)
* [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) (For development purporse)
* [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) (For hot module / optional)

Babel 
______

Babel 6 has changed drastically.

babel-core which is just node transformers and accepts plugins and presets.

used plugins/prsets in this project. 
Presets are nothing but group of plugins.

* [react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
* [es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
* [stage-1](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-1) (Currently using only for exports)


Webpack will watch for changes in the files from the `app` folder and hot load any changed modules.

This means that you can update both your single page app and have the changes available immediately.

#### Running development
```sh
npm start
```
#### Building for Production
```sh
npm run build
```
This will build the app and output the files to the `build` directory.
#### Running the server
```sh
npm run server
```
This will launch the express server serving content from `dist`%