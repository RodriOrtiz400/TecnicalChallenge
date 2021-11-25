import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AirlineService } from '../services/airline/airline.service';

import Swal from 'sweetalert2';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
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
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    this.airline.getAirlines().subscribe((airlineNames) => {
      this.airlines = airlineNames;
    });
  }

  get usernameValid() {
    return (
      this.authForm.get('username')?.invalid &&
      this.authForm.get('username')?.touched
    );
  }

  get passwordValid() {
    return (
      this.authForm.get('username')?.invalid &&
      this.authForm.get('username')?.touched
    );
  }

  login() {
    const values = this.authForm.value;
    this.authLogin.login(values.username, values.password).subscribe(
      (res) => {
        if (res.member.id) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
            this.router.navigateByUrl('/home');
          }        
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error de Usuario - Contraseña',
        });
      }
    );
  }
}
