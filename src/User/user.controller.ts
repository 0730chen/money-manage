import {Body, Controller, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
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
        console.log('全部用户列表')
        const posts = await this.userService.getUser();
        console.log('控制器',posts);
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
    async createAccount(@Body() createAccountDto:CreateUserDTO,@Res() res) {

        console.log(createAccountDto);
        let User = {
            _id: createId(),
            name: createAccountDto.name,
            password: createAccountDto.password,
            tags: [],
            records: []
        };
        console.log(User);
        //先根据用户查询
        const userFlag = await  this.userService.findTags(createAccountDto.name)
        console.log(userFlag);
        if(userFlag.name){
            return res.status(HttpStatus.OK).json(userFlag);
        }else {
            const posts = await this.userService.createUser(User);
            return res.status(HttpStatus.OK).json(posts);
        }
    }


    // /user/1此时id就是1
    //传入用户名，获得最新的内容
    @Put('tags')
    async updateCat(@Body() body): Promise<Result> {
        console.log(body);
        // let {name,tags} = body
        let name = body.name

        console.log(body.name,name)
        console.log(body.tags);
        const user = await this.userService.editUser(body)

        console.log(user,'返回的结果');

        return { code: 200, message: '更新成功',data:'xxx' };
    }
    // @Put('tags')
    // async updateTags(@Param(name):Promise<Result>) {
    //     console.log(name);
    // }

}

