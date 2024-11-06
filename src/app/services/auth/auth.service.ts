import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/interfaces/IUser';
import { IUserData } from 'src/app/interfaces/IUserData';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL : string = 'https://dummyjson.com/auth/login';
  private user: IUser | null = null;
  private token : string|null = null

  constructor(
    private http: HttpClient,
  ) { }


  login(user: IUser){
    const body = JSON.stringify(user);
    return this.http.post<IUserData>(this.URL, body,{
      headers: {'Content-Type':'application/json'}
  })
  }

  getToken(){
    return this.token;
  }
}