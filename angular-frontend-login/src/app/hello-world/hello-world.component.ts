import { Component, OnInit } from '@angular/core';
import { Message } from 'src/modal/message';
import { HelloWordService } from 'src/app/hello-world.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  public set router(value: Router) {
      this._router = value;
  }
  public get router(): Router {
      return this._router;
  }
  public set route(value: ActivatedRoute) {
      this._route = value;
  }
  public get route(): ActivatedRoute {
      return this._route;
  }

  message?: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router, private helloWorldService: HelloWordService) { }

  ngOnInit() {

    console.log("HelloWorldComponent");
    this.helloWorldService.helloWorldService().subscribe( (result) => {
      this.message = result.content;
    });
  }

}
