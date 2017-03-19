import { RequestHandler, Router, Request, Response } from 'express'

export class Api_v1 {
    static serve(router: Router) {
        new Api_v1(router);
    }
    constructor(router: Router) {
        let api = Router();
        api.get('/', this.get);
        router.use('/v1', api);
    }
    get(req: Request, res: Response) {
        res.json({
            title: 'OK',
            message: 'Hello World'
        });
    }
}