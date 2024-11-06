import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/interfaces/IUser';
import { IUserData } from 'src/app/interfaces/IUserData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL : string = 'https://dummyjson.com/auth/login';
  private user: IUserData | null = null;
  public token!: string;

  constructor(
    private http: HttpClient,
    private router : Router
  ) { }


  login(user: IUser){
    const body = JSON.stringify(user);
    this.http.post<IUserData>(this.URL, body,{
      headers: {'Content-Type':'application/json'}
  }).subscribe((response) =>{
    this.token = response.accessToken,
    this.user = response;
    this.router.navigate(['/catalog'])
    }
  )
  }

}