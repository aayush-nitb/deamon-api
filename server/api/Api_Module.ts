import { Application, Router } from 'express'
import { Api_v1 } from './v1/Api_v1'
import { Api_v2 } from './v2/Api_v2'

export class Api_Module {
    constructor(private app: Application) {
        //noop
    }
    serve() {
        let api:Router = Router();
        Api_v1.serve(api);
        Api_v2.serve(api);
        this.app.use('/api', api);
    }
    allowCors() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
    }
    handleError() {
        this.app.use((req, res, next) => {
            res.status(404);
            res.json({
                title: 'Error',
                message: "Not Found"
            });
        });
    }
}