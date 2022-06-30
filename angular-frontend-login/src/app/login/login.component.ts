import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public set route(value: ActivatedRoute) {
      this._route = value;
  }
  public get route(): ActivatedRoute {
      return this._route;
  }
  public set router(value: Router) {
      this._router = value;
  }
  public get router(): Router {
      return this._router;
  }

  username?: string;
  password? : string;
  errorMessage = 'Invalid Credentials';
  successMessage?: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
	private _route: ActivatedRoute,
    private _router: Router,
    private authenticationService: AuthService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username!, this.password!).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/hello-world']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}
