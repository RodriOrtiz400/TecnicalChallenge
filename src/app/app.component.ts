import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare var gtag: any;

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  selector: 'app-root',
})
export class AppComponent {
  title = 'technicalChallenge';
  constructor(private router: Router) {
    const navEndEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );

//@ts-ignore
    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-QS44KFVY28', {
        'page_path': event.urlAfterRedirects,
      });
    });
  } 
}
