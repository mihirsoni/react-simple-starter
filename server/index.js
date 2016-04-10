var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack/webpack.config.dev');

var app = express();
var compiler = webpack(config);
var serverOptions = {
    hot: true,
    lazy: false,
    publicPath: config.output.publicPath,
    stats: {colors: true}
  };
app.use(require('webpack-dev-middleware')(compiler, serverOptions));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:5000');
});
