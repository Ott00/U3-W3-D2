import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private loginSer: LoginService) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      gender: new FormControl(null, Validators.required),
      fileImg: new FormControl(null, Validators.required),
      bio: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.loginSer.addRegistration(this.registrationForm.value);

    console.log('Registrazione avvenuta correttamente');
    this.registrationForm.reset();
  }
}
