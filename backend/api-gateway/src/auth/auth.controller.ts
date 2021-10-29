import { ConsoleLogger, Body, Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Authentication')
@Controller('/api/v0/auth')
export class AuthController {
    private readonly logger = new ConsoleLogger(AuthController.name);
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Req() req) {
        return await this.authService.signIn(req.user);
    }

    @Post('signup')
    async signUp(@Body() userDTO: UserDTO) {
        return await this.authService.signUp(userDTO);
    }
}
