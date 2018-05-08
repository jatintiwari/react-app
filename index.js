/**
 * dependencies
 */
const express = require('express');
const ejs = require('ejs');
const path = require('path');

/**
 * express
 */
const app = express();


/**
 * constants
 */
app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);

/**
 * routes
 */
app.use('/bundle.js', function (req, res, next) {
  res.sendFile(path.join(__dirname, "dist", "bundle.js"));
});
app.use('/', function (req, res, next) {
  res.render('index.html', {});
});

app.listen(app.get('port'), function () {
	console.log('Express server is up on port 3000');
});