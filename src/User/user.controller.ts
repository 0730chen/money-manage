import {Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDTO} from "./dto/user.dto";
import {createId} from "../../lib/createId";
import {type} from "os";
//定义一个返回接口
interface Result {
    code: number;
    message: string;
    data?: any;
}

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('pageList')
    async getPageList(@Res() res) {
        const posts = await this.userService.getUser();
        return res.status(HttpStatus.OK).json(posts);
    };
    @Get(':id')
    async getOneUser(@Param('id') bookID) {
        console.log('寻找标签');
        const User = await this.userService.findTags(bookID);
        console.log(User);
        return User
    }

    /*
    在创建的时，现在数据库中查找，如果有则返回查询的数据

    * */
    @Post('createUser')
    async createAccount(@Body() createAccountDto:CreateUserDTO,@Res() res): Promise<Result> {

        let User = {
            _id: createId(),
            name: createAccountDto.name,
            password: createAccountDto.password,
            tags: [],
            records: [],
            tagType: createAccountDto.tagType
        };
        //先根据用户查询
        const userFlag = await this.userService.findTags(createAccountDto.name)
        console.log('查询到的结果')
        console.log(userFlag)
        //不存在则返回空数组
        if(userFlag.toString()==='') {

            const posts = await this.userService.createUser(User);
            console.log('创建一个用户')
            return res.status(HttpStatus.OK).json(posts);
        }else {
            if (userFlag[0].name && createAccountDto.password === userFlag[0].password) {
                console.log('登陆成功')
                return res.status(HttpStatus.OK).json(userFlag);
            } else {
                console.log('密码错误或用户名重复')
                return  res.status(401).json({ message: '用户名重复或密码不正确', data: new HttpException('', HttpStatus.BAD_REQUEST)})
                // return {code: 404, message: '用户名重复或密码不正确', data: new HttpException('', HttpStatus.BAD_REQUEST)}
            }
        }
    }


    // /user/1此时id就是1
    //传入用户名，获得最新的内容
    @Put('tags')
    async updateCat(@Body() body): Promise<Result> {
        console.log(body);
        // let {name,tags} = body
        let name = body.name

        try {
            const user = await this.userService.editUser(name,'tags',body.tags)
            console.log(user)

            return { code: 200, message: '更新成功',data:user };
        }catch (e) {
            console.log(e)
            return { code: 404, message: '更新失败',data:'error' };
        }

    }

/**
 * @param
 * 获取name和record
 * */
    @Post('/record')
    async addRecord(@Body() body):Promise<Result>{
        //获取传入的用户名
        let name = body.name
        let newRecord = body.record
    //根据name查找记录
    try{
            let record = await this.userService.findTags(name)
            let newObj = Object.assign({},record)

            let result = await this.userService.editUser(name,'record',newRecord)
        return { code: 200, message: '更新成功',data:result};
    } catch (e) {
            return {code:400,message:'error',data:e}
    }

    }

    // @Put('tags')
    // async updateTags(@Param(name):Promise<Result>) {
    //     console.log(name);
    // }

}

