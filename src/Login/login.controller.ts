import {Body, Controller, Get, Post, Res} from '@nestjs/common';
import CreateAccountDto from "../Dto/create-account.dto";


@Controller('login')
export class LoginController {

    @Get()
    findAll():string{
        console.log(111)
        return '登陆页'
    }
    @Post()
    createAccount(@Body() createAccountDto:CreateAccountDto): string {

        console.log(createAccountDto.name,createAccountDto.password)
        return '创建一个账户'
    }
}