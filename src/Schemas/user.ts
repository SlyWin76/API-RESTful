import { IsString, IsEmail, Length } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Post } from './post';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @Length(2, 20)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(8, 100)
  readonly password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}


@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }] })
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);


