import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  provider = new firebase.auth.GoogleAuthProvider()

  constructor(private angularFireAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {

    this.angularFireAuth.signInWithPopup(this.provider)
  }
}
