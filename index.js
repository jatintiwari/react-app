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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
    .header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Accept, Content-Type");
  next();
})

app.use('/api/tweets', function (req, res, next) {
  var json = () => {
    const arr = [];
    let n = 0;
    while(n < 100) {
      arr.push({ text: Math.round(Math.random()*100) });
      n++;
    }
    return arr;
  };
  res.json(json()).status(200);
});
app.use('/api/*', function (req, res, next) {
  res.status(400).send({ error: 'Error message' });
});

app.use('/', function (req, res, next) {
  res.render('index.html', {});
});

app.listen(app.get('port'), function () {
  console.log('Express server is up on port 3000');
});