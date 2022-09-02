const express = require('express');
const bodyParser = require("body-parser");
// const Sequelize = require('sequelize');
const app = express();
const port = 3000;
var routes = require('./common/routes');

app.use(bodyParser.json());
const getStatistics = require('./controllers/getStatistics');
const getStatisticsFromDB = require('./controllers/getStatisticsFromDB');


app.use('/api', routes)
app.get('/stats', getStatistics);
app.get('/stats-from-db', getStatisticsFromDB);

app.listen(port, () => { 
    console.log(`Your app is listening on port ${port}`);
});

module.exports = () => app;