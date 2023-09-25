import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private activeRoute: ActivatedRoute) {}

  // showHeader(): boolean {
  //   const currentRoute = this.activeRoute.snapshot.url[0].path;
  //   return currentRoute !== 'login' && currentRoute !== 'register';
  // }

  // showFooter(): boolean {
  //   const currentRoute = this.activeRoute.snapshot.url[0].path;
  //   return currentRoute !== 'login' && currentRoute !== 'register';
  // }
}
