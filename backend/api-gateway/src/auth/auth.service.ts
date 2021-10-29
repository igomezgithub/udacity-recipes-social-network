import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserMSG } from 'src/common/constants';
import { ClientProxyRecipesSocialNetwork } from 'src/common/proxy/client-proxy';
import { UserDTO } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly clientService: ClientProxyRecipesSocialNetwork, private readonly jwtService: JwtService) { }

    private _clientProxyUser = this.clientService.clientProxyUsers(); 

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this._clientProxyUser.send(UserMSG.VALID_USER, { username, password }).toPromise();

        if(user) return user;

        return null;
    }

    async signIn(user: any) {
        const payload = {
            username: user.username,
            sub: user._id
        };

        return { access_token: this.jwtService.sign(payload) };
    }

    async signUp(userDTO: UserDTO) {
        const newUser = await this._clientProxyUser.send(UserMSG.CREATE, userDTO).toPromise();
        console.log('New User: ', newUser);

        const payload = {
            username: newUser.username,
            sub: newUser._id
        };

        return { access_token: this.jwtService.sign(payload), user: payload.username };
    }
}
