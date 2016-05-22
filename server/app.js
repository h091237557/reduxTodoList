'use strict';

import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import path from 'path';
import fs from 'fs';

var app = express();
app.use('/public', express.static(path.join(__dirname, '/../public')));

//----------------------------
// Router
const router = express.Router();
const index = fs.readFileSync('index.html', {encoding: 'utf-8'});
router.get('*', (req, res) => {
  res.status(200).send(index.replace( '${path}', path ));
  // res.sendFile(path.join(path.normalize(__dirname + '/..'), 'index.html'));
});
//
//----------------------------

// module.exports = app;
module.exports = function(production) {

  // if(production) {
  //   process.env.NODE_ENV = 'production';
  // }

  //----------------------------
  // 啟用新版 webpack HMR 功能
  var env = app.get('env');
  console.log(process.env.NODE_ENV);
  var webpack = require('webpack');
  var config = (env === 'development') ? require('../webpack.config') : require('../webpack.config');
  // var config = (env === 'development') ? require('../webpack.dev.config') : require('../webpack.prod.config');
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    contentBase: './dist/',
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
  //
  //----------------------------

  // app.use(favicon(__dirname + '/public/img/favicon.ico'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use('/', router);

  /// catch 404 and forward to error handler
  app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  });

  /// error handlers
  app.use(errorHandler());


  if(app.get('env') !== 'production') {
    app.listen(3000, function(err) {
      if (err) {
        console.log(err);
        return;
      }

      console.log('Listening at http://localhost:3000');
    });
  }

  return app;
}
