import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router) { }

  login(){
      this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res=> this.router.navigate(['/forums']));
  }

  logOut(){
    this.auth.signOut();
  }
  

  ngOnInit(): void {
  }

}
