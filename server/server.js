'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var bodyParser = require('body-parser');
var multer = require('multer');
var paypal  = require('paypal-rest-sdk')

var app = module.exports = loopback();

//explorer module code
//var explorer = require('loopback-component-explorer');



//

//middleware.json code to show react files
/*
"files" : {
  "loopback#static": {
    "params":"$!../client"
  }
},
*/
//end

//code for body parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data

//code for body parsing ends

//explorer node module
/*
explorer(app, { basePath: '/api', mountPath: '/explorer' });
app.use('/explorer', explorer.routes(app, { basePath: '/api' }));

//console.log("Explorer mounted at localhost:" + port + "/explorer");

*/
//ends
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
