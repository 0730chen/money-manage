import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {BlogModule} from "./blog/blog.module";
import {LoginController} from "./Login/login.controller";
import { UserModule } from './user/user.module';
@Module({
  imports: [
      MongooseModule.forRoot('mongodb://114.55.37.250:27017/money'),
      BlogModule,
      UserModule
  ],
  controllers: [AppController,LoginController],
  providers: [AppService],
})
export class AppModule {}
