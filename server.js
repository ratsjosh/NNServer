const express = require('express'),
    chalk = require('chalk'),
    path = require('path'),
    app = express();

app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.post('/file-upload', homeController.file);


app.listen(3000, function () {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
})