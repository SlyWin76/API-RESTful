import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { PostsService } from '../Services/post.service';
import { CreatePostDto } from '../Schemas/post'; 

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll() {
    return this.postsService.findAll();
  }

  @HttpPost()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

}