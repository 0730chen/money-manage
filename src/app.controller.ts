import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(111);
    return this.appService.getHello();
  }
  @Get(':id')
  findMore(@Param() params) {
    return `接受路由中的参数：id：${params.id}，name:${params.name}`;
  }

}
