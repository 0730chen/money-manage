import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Post} from './interfaces/user.interface'
import { Model } from 'mongoose';
type User = {
    name:string,
    password:string
}

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly postModel: Model<Post>) { }
    //查询所有的注册用户
    async getUser(): Promise<Post[]> {
        console.log(this.postModel)
        //postModel就是数据库的
        const posts = this.postModel.find({})
        return posts;
    }
    //根据参数创建用户
    async createUser(user:User):Promise<Post[]>{
        console.log(this.postModel,user)
        const posts = this.postModel(user)
        return posts.save()
    }

}
