import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isUsernameValid: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  validateUsername() {
    const pattern = RegExp(/^[\w-.]*$/);
    this.isUsernameValid = pattern.test(this.username);
  }

  onKey(e: any, type: string) {
    if (type === 'username') {
      this.username = e.target.value;
      this.validateUsername();
    } else if (type === 'password') {
      this.password = e.target.value;
    }
  }
}
