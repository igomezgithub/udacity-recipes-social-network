import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CommentDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly textComment: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly aliasUser: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly rate: number;

    @ApiProperty()
    @Type(() => Date)
    @IsDate()
    readonly commentDate: Date;
}
