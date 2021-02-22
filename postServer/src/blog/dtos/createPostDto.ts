import { type } from "os";
import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class createPostDto {

    @IsString()
    @ApiProperty({type: String, name: 'title'})
    public title: string;

    @IsString()
    @ApiProperty({type: String, name: 'subTitle'})
    public subTitle: string;

    @IsString()
    @ApiProperty({type: String, name: 'content'})
    public content: string

    @IsNumber()
    @ApiProperty({type: Number, name: 'userId'})
    public userId: number;
}