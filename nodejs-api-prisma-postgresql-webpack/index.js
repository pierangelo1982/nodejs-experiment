const express = require("express");
const app = express();
const teamRouter = require('./routes/teamRoute')
const driverRouter = require('./routes/driverRoute');
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => res.send("F1 Team & Driver"));
app.use('/api/v1/teams', teamRouter);
app.use('/api/v1/drivers', driverRouter);

app.listen(3000, () => {
  return console.log(`Nodejs Express is running on http://localhost:3000`);
});
