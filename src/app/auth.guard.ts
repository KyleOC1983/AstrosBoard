import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private snackbar: MatSnackBar, private auth: AngularFireAuth, private router: Router){

  }
  canActivate(): Observable<boolean> {
    return this.auth.user.pipe(
      map(user=>{
        if(user){
          return true;
        }
        this.snackbar.open("Please Log In Through Google To Post", null, {
          duration: 5000,
        })
        this.router.navigate(['login'])
        return false;
      })
    )
  }
}
