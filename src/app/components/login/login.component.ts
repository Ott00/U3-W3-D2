import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginSer: LoginService) {}

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    console.log(loginForm);
    this.checkUserRegistration(loginForm.value);
  }

  checkUserRegistration(userToCheck: any) {
    const registration = this.loginSer.getRegistration();
    //ipotetico controllo per il login
    console.log('Utente loggato');
  }
}
