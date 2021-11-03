import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, ValidateIf } from "class-validator";

export class RecipeDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly recipeName: string;

    @ApiProperty()
    @IsString()
    readonly url: string;

    @ApiProperty()
    @IsNumber()
    readonly readyIn: number;

    @ApiProperty()
    @IsNumber()
    readonly averageRaiting: number;

    @ApiProperty()
    @IsString()
    readonly skillLevel: string;
    
    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly method: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly ingredients: string;
}
