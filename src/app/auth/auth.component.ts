import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  /* Import authService and router */
  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  /*  Sign in */
  onSignIn() {
    console.log('Signing in...');
    this.authService.signIn().then(
      () => {
        console.log('Successfully signed in!');
        this.authStatus = this.authService.isAuth;

        /* Redirecto to the "appareils" page */
        this.router.navigate(['appareils']);
      }
    );
  }

  /* Sign out */
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    console.log('Successfully signed out!');
  }

}
