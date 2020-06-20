import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  valid = {
    username: true,
    password: true,
    email: true,
  };

  constructor() {}

  ngOnInit(): void {}

  validate(type: string): void {
    const usernamePattern = /^[\w-.]*$/;
    const emailPattern = /\S+@\S+\.\S+/;

    if (type === 'username') {
      if (this.username.length < 5) {
        this.valid.username = false;
      } else {
        this.valid.username = usernamePattern.test(this.username);
      }
    } else if (type === 'email') {
      this.valid.email = emailPattern.test(this.email);
    } else if (type === ('confirmPassword' || 'password')) {
      this.valid.password = this.password === this.confirmPassword;
    }
  }

  onKey(e: any, type: string): void {
    if (type === 'username') {
      this.username = e.target.value;
    } else if (type === 'email') {
      this.email = e.target.value;
    } else if (type === 'password') {
      this.password = e.target.value;
    } else if (type === 'confirmPassword') {
      this.confirmPassword = e.target.value;
    }

    this.validate(type);
  }
}
