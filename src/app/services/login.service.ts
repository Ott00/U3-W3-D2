import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  registration: any[] = []; //sarebbe da fare un interfaccia
  constructor() {}

  getRegistration() {
    return this.registration;
  }

  addRegistration(user: any) {
    this.registration.push(user);
  }
}
