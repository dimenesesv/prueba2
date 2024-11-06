import { Component, OnInit } from '@angular/core';
import { ViewWillLeave } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { IUser } from '../interfaces/IUser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  form! : FormGroup;
  private token:string|null = null;
  constructor(
    public auth: AuthService,
    public formBuilder: FormBuilder,
    public router: Router) { }


  onSubmit(){
    const user : IUser = this.form.value
    this.auth.login(user)
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
}
