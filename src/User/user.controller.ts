import {Body, Controller, Get, HttpStatus, Post, Res} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDTO} from "./dto/user.dto";
let index = 0
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('pageList')
    async getPageList(@Res() res) {
        const posts = await this.userService.getUser();
        return res.status(HttpStatus.OK).json(posts);
    };

    @Post('createUser')
    async createAccount(@Body() createAccountDto:CreateUserDTO,@Res() res) {
        let User = {
            _id:index+1,
            name:createAccountDto.name,
            password:createAccountDto.password,
            tags:[],
            records:[]
        }
        const posts = await this.userService.createUser(User);
        console.log(index);
        index +=1
        return res.status(HttpStatus.OK).json(posts);
    }

}
