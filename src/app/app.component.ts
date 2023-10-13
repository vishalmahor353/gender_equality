import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { contains, event } from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GenderEquality';
  constructor(private activeRouter: ActivatedRoute, private router: Router) {}

  showHeader(): boolean {
    const currentRoute: any =
      this.activeRouter.snapshot.firstChild?.routeConfig?.path;
    const routersWithHedar = [
      'home',
      'features',
      'donate',
      'news',
      'contact',
      'event',
    ];
    return !!currentRoute && routersWithHedar.includes(currentRoute);
  }

  showFooter(): boolean {
    const currentRoute =
      this.activeRouter.snapshot.firstChild?.routeConfig?.path;
    const routersWithHedar = [
      'home',
      'features',
      'donate',
      'news',
      'contact',
      'event',
    ];
    return !!currentRoute && routersWithHedar.includes(currentRoute);
  }
}
