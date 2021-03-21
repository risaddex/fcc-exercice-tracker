var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
import express from 'express';
import * as http from 'http';
import cors from 'cors';
import debug from 'debug';
import path from 'path';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const debugLog: debug.IDebugger = debug('app');

// here we are adding middleware to parse all incoming requests as JSON
app.use(express.json());

// here we are adding middleware to allow cross-origin requests
app.use(express.static('public'));
app.use(cors());

app.use('/users', usersRouter);

app.get('/', function (req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, '../views') });
});

server.listen(port, () => {
  debugLog(`Server running at http://localhost:${port}`);
});
