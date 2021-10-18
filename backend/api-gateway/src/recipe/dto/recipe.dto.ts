import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class RecipeDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly method: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly ingredients: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly url: string;
}
