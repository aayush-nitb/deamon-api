import * as express from 'express'
import * as bodyParser from 'body-parser'

import { Commons_Config } from './commons/Commons_Config'
import { Api_Module } from './api/Api_Module'

let app: express.Application = express();
let api: Api_Module = new Api_Module(app);

let mongoose = require('mongoose');
mongoose.connect(Commons_Config.current.mongoConnectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (Commons_Config.env == 'development') api.allowCors();
api.serve();
api.handleError();

let server = app.listen(Commons_Config.current.port, () => {
    console.log('Server listening on port' + Commons_Config.current.port);
});