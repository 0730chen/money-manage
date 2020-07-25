/**
 * 定义数据库种储存的数据类型
 * collection选择需要查看的表
 * **/
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
        _id:Number,
        name:String,
        password:String,
        tags:[],
        record:[],
    },{collection:'user'}
)