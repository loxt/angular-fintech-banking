import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isUsernameValid: boolean = true;
  error: any = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.errorMessage.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
  }

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

  onSubmit() {
    if (this.isUsernameValid) {
      this.userService.login(this.username, this.password);
    }
  }
}
