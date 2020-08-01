import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Post} from './interfaces/user.interface'
import {Model} from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly postModel: Model<Post>) {}
    //查询所有的注册用户
    //查询全部的
    async getUser(): Promise<Post[]> {
        console.log(this.postModel)
        //postModel就是数据库的
        const posts = this.postModel.find().exec();
        return posts;
    }
    //根据参数创建用户
    //新增方法 this.postModel(params)
    async createUser(user: { password: string; records: any[]; name: string; tags: any[] }):Promise<Post[]>{
        console.log(user,'传过来的参数')
        const User = new this.postModel(user)
        // const posts = this.postModel(user)
        return User.save()
    }
    //查询用户的标签
    //根据id查询
    async findTags(id):Promise<Post>{
        return  await this.postModel.findById(id)
            .exec()
    }
    //更新方法
    async editUser(id,user,):Promise<Post>{
        return await this.postModel
            .findByIdAndUpdate(id, user, {new: true});
    }
    //删除
    async deleteUser(id):Promise<Post>{
        return await this.postModel
            .findByIdAndRemove(id);
    }
}
