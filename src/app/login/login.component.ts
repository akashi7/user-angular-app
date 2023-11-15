import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { loginInterface } from './interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: loginInterface = {
    role: '',
  };
  constructor(private route: Router, private userService: UserService) {}
  onSubmit(): void {
    this.userService.setLocalStorage(this.form.role);
    this.route.navigate(['/dashboard']);
  }
}