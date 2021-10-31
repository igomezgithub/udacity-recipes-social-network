import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from 'src/app/core/auth/api.service';

const JWT_LOCALSTORE_KEY = 'jwt';
const USER_LOCALSTORE_KEY = 'user';

@Injectable()
export class AuthService {
  currentUser$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
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

  removeTokenAndUser(token: string) {
    localStorage.removeItem(JWT_LOCALSTORE_KEY);
    localStorage.removeItem(USER_LOCALSTORE_KEY);
    this.api.setAuthToken(token);
  }

  async login(username: string, password: string): Promise<any> {
    return this.api.post('/auth/signin',
      {username: username, password: password})
      .then((res) => {
        this.setTokenAndUser(res.access_token, res.user);
        return res;
      })
      .catch((e) => { throw e; });
  }

  logout(): boolean {
    this.removeTokenAndUser('');
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
