import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  registration: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
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
    console.log(this.form);
    this.registration.push(this.form.value);
    console.log(this.registration);

    console.log('Registrazione avvenuta correttamente');
    this.form.reset();
  }
}
