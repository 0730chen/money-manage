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
        //postModel就是数据库的
        const posts = await this.postModel.find().exec();
        return posts;
    }
    //根据参数创建用户
    //新增方法 this.postModel(params)
    async createUser(user: { password: string; records: any[]; name: string; _id: number; tags: any[] }):Promise<Post[]>{
        this.postModel.find(user.name)
        const User = new this.postModel(user)
        // const posts = this.postModel(user)
        return User.save()
    }
    //查询用户的标签
    //根据用户名
    async findTags(params):Promise<Post>{
        console.log(params);
        try {
            return await this.postModel.find({name:params})
                .exec()
        }catch (e) {
            return e.message
        }
    }
    //更新方法
    async editUser(name,key,value):Promise<Post>{

        if(key==='tags'){
            return await this.postModel
                .findOneAndUpdate({name:name},{$set:{tags:value}},{new:true});
        }else {
            return await this.postModel
                .findOneAndUpdate({name:name},{$set:{record:value}},{new:true});
        }
    }
    //删除
    async deleteUser(id):Promise<Post>{
        return await this.postModel
            .findByIdAndRemove(id);
    }
    //
}
