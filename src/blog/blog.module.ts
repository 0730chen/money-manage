import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schemas';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema }])
  ],
  providers: [BlogService],
  controllers: [BlogController]
})
export class BlogModule {}