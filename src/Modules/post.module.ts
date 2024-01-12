import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from '../Controllers/post.controller';
import { PostsService } from '../Services/post.service';
import { Post, PostSchema } from '../Schemas/post';

@Module({
    imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [PostsController],
    providers: [PostsService],
  })
  export class PostsModule {}