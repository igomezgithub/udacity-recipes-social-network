import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from "class-validator";

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
    @IsString()
    readonly rate: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly commentDate: Date;
}
