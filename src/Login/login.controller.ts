import { Controller,Post} from '@nestjs/common';


@Controller()
export class AppController {

    @Post()
    getHello(): string {
        return '登陆'
    }
}