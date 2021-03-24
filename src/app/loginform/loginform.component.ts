import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormService } from './loginform.service';

@Component({
  selector: 'loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  errorMessage: any;

  email="lriha@gmail.com";
  password="tomhatesmau";


  validUser: any;
  loginForm: LoginFormService;

  constructor(private router: Router) {
    this.loginForm = new LoginFormService();
  }

  ngOnInit(): void {}

  validate(tFormObj: any) {
    this.errorMessage = '';

    this.validUser = this.loginForm.validateUser(tFormObj.value);

    if (this.validUser) {
      this.router.navigate(['/home'], { state: this.validUser });
    } else {
      this.errorMessage = 'Invalid Email or Password';
    }
    

    
  }
}
