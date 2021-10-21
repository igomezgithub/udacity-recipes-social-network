import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateIf } from "class-validator";


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
    @IsString()
    readonly ingredients: string;
    
    @ApiProperty()
    @IsString()
    readonly url: string;
}
