// express server
const express = require('express');
const app = express();
const connectToDb = require('./database/db');
const { route } = require('./routes/routes'); // This line is problematic
const routes = require('./routes/routes');
const path = require('path'); // Import path module

connectToDb();

app.use(express.urlencoded({ extended: true })); // Add this line
app.use(express.json()); // Add this line

app.use('/', routes); 
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(routes) // Remove this line. It's redundant.

const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
