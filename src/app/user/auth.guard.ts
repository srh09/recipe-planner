import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { SnackService } from '../services/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private angularFireAuth: AngularFireAuth, private snackService: SnackService) { }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const user = await this.angularFireAuth.currentUser
    const isLoggedIn = !!user
    if (!isLoggedIn) {
      this.snackService.authError()
    }
    return isLoggedIn
  }
  
}
