import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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

  isLoggedIn = false;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private authenticationService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  handleLogout() {
    this.authenticationService.logout();
  }
}
