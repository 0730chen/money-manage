import {Body, Controller, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDTO} from "./dto/user.dto";
import {createId} from "../../lib/createId";


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

}

