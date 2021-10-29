import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from 'src/app/core/auth/api.service';

const JWT_LOCALSTORE_KEY = 'jwt';
const USER_LOCALSTORE_KEY = 'user';

@Injectable()
export class AuthService {
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>({ email: '', username: ''});
  constructor(private api: ApiService) {
    this.initToken();
  }

  initToken() {
    const token = localStorage.getItem(JWT_LOCALSTORE_KEY);
    const user = <User> JSON.parse(localStorage.getItem(USER_LOCALSTORE_KEY) as any);
    if (token && user) {
      this.setTokenAndUser(token, user);
    }
  }

  setTokenAndUser(token: string, user: User) {
    localStorage.setItem(JWT_LOCALSTORE_KEY, token);
    localStorage.setItem(USER_LOCALSTORE_KEY, JSON.stringify(user));
    this.api.setAuthToken(token);
    this.currentUser$.next(user);
  }

  async login(email: string, password: string): Promise<any> {
    return this.api.post('/users/auth/login',
              {email: email, password: password})
              .then((res) => {
                this.setTokenAndUser(res.token, res.user);
                return res;
              })
              .catch((e) => { throw e; });
      // return user !== undefined;
  }

  logout(): boolean {
    this.setTokenAndUser('', { email: '', username: ''});
    return true;
  }

  async register(user: User, password: string): Promise<any> {
    return await this.api.post('/auth/signup',
      {name: user.username, username: user.username, email: user.email, password: password})
      .then((res: any) => {
        this.setTokenAndUser(res.access_token, res.user);
        return res;
      })
      .catch((e: any) => { throw e; });
  }
}
