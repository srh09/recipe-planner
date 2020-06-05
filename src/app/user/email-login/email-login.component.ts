import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {

  form: FormGroup
  type: 'login' | 'signup' | 'reset' = 'signup'
  loading = false
  serverMessage: string

  constructor(private angularFireAuth: AngularFireAuth, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', []]
    })
  }

  changeType(value) {
    this.type = value
  }

  async onSubmit() {
    this.loading = true
    const email = this.email.value
    const password = this.password.value

    try {
      if (this.isLogin) {
        await this.angularFireAuth.signInWithEmailAndPassword(email, password)
      } else if (this.isSignUp) {
        await this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      } else if (this.isPasswordReset) {
        await this.angularFireAuth.sendPasswordResetEmail(email)
        this.serverMessage = 'Check your email'
      } else {
        this.serverMessage = 'Something went wrong'
      }
    } catch (error) {
      this.serverMessage = error
    }
    this.loading = false
  }

  get isLogin() { return this.type === 'login' }
  get isSignUp() { return this.type === 'signup' }
  get isPasswordReset() { return this.type === 'reset' }
  get email() { return this.form.get('email') }
  get password() { return this.form.get('password') }
  get passwordConfirm() { return this.form.get('passwordConfirm') }
  get passwordDoesMatch() {
    return this.type !== 'signup' ? true : this.password.value === this.passwordConfirm.value
  }
}
