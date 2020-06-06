import { Directive, HostListener } from "@angular/core"
import { AngularFireAuth } from "@angular/fire/auth"
import { auth } from "firebase/app"

@Directive({
  selector: "[appGoogleSignin]",
})
export class GoogleSigninDirective {
  constructor(private angularFireAuth: AngularFireAuth) {}

  @HostListener("click")
  onclick() {
    this.angularFireAuth.signInWithPopup(new auth.GoogleAuthProvider())
  }
}
