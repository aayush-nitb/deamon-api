import { RequestHandler, Router, Request, Response } from 'express'

export class Api_v2 {
    static serve(router: Router) {
        new Api_v2(router);
    }
    constructor(router: Router) {
        let api = Router();
        api.get('/', this.get);
        router.use('/v2', api);
    }
    get(req: Request, res: Response) {
        res.json({
            title: 'OK',
            message: 'Hello World'
        });
    }
}