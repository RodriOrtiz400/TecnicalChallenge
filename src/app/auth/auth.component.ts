import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AirlineService } from '../shared/services/airline/airline.service';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  public airlines: any[] = [];
 
  constructor(
    private formBuilder: FormBuilder,
    private authLogin: AuthService,
    private airline: AirlineService,
    private router: Router
  ) { 
    this.authForm = this.formBuilder.group({
      airline: ['HAWAIIAN AIRLINES (HA)'],
      username: ['', [ Validators.required, Validators.minLength(4) ]],  
      password: ['', [ Validators.required, Validators.minLength(4) ]]
    })
  }

  ngOnInit(): void {
    this.airline.getAirlines().subscribe((airlineNames) => {
     this.airlines = airlineNames     
    })
  }

  get usernameValid() {
    return this.authForm.get('username')?.invalid && this.authForm.get('username')?.touched
  }

  get passwordValid() {
    return this.authForm.get('username')?.invalid && this.authForm.get('username')?.touched
  }

  login(){
    const values = this.authForm.value;
    console.log(values);
    
    this.authLogin.login(values.username, values.password).subscribe(
      () => this.router.navigateByUrl('/home')
    )
  }

}
