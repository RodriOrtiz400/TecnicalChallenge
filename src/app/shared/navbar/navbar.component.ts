import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {   
  }

  ngOnDestroy() {
    sessionStorage.clear();
  }

  logout() {
    this.router.navigateByUrl('/auth');
  }

}
