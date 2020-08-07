import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router, private _snackBar: MatSnackBar) { }

  logged: boolean;

  login(){
      this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res=> this.router.navigate(['/forums']));
      this.logged = false;
  }

  logOut(){
    this.auth.signOut();
    this.logged = true;
    this._snackBar.open("Successfully Logged Out", '',{
      duration: 2000,
    })
  }
  

  ngOnInit(): void {
  }

}
