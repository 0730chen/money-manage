/**
 * 定义数据库种储存的数据类型
 * collection选择需要查看的表
 * **/
import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String
},{collection:'blog'}
)