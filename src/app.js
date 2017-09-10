const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 3000
const mainRoutes = require('./../routes');
const apiRoutes = require('./../routes/api');

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');
app.use(mainRoutes);
app.use(apiRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})