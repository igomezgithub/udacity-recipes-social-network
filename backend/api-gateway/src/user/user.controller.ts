import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserMSG } from 'src/common/constants';
import { IUser } from 'src/common/interfaces/user.interface';
import { ClientProxyRecipesSocialNetwork } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';

@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('api/v0/user')
export class UserController {
    constructor(private readonly clientProxy: ClientProxyRecipesSocialNetwork) { };

    private _clientProxyUser = this.clientProxy.clientProxyUsers();

    @Post()
    create(@Body() userDto: UserDTO): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.CREATE, userDto);
    }

    @Get()
    findAll(): Observable<IUser[]> {
        return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDto: UserDTO): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.UPDATE, { id, userDto });
    }

    @Delete()
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyUser.send(UserMSG.DELETE, id);
    }
}
