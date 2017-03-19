import * as path from 'path'

export interface Commons_Config_Environment {
    root: string;
    port: number;
    mongoConnectionString: string;
}

export class Commons_Config {
    static rootPath = path.normalize(__dirname + '/..');
    static env = process.env.NODE_ENV || 'development';
    static development = {
        root: Commons_Config.rootPath,
        port: process.env.PORT || 3000,
        mongoConnectionString: 'mongodb://deamon:8ce3227f02b68f0acb063ec5d046df69@localhost/deamon'
    };
    static production = {
        root: Commons_Config.rootPath,
        port: process.env.PORT || 3000,
        mongoConnectionString: process.env.CUSTOMCONNSTR_MONGODB
    }
    static current: Commons_Config_Environment = Commons_Config[Commons_Config.env];
}