/**
 * 提供数据库连接方法
 *
 * **/
import mongoose from 'mongoose'
export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async (): Promise<mongoose.Connection> =>
            await mongoose.connect('mongodb://localhost/nest'),
    },
];