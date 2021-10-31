import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.required),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+$')
      ]))
    });
  }


  geUsernameErrorMessage() {
    if (this.loginForm.controls.username.hasError('required')) {
      return 'You must enter your username';
    } else {
      return null;
    }
  }

  getPasswordErrorMessage() {
    if (this.loginForm.controls.password.hasError('required')) {
      return 'You must enter your password';
    } else {
      return null;
    }
  }

  onSubmit($event: any) {
    $event.preventDefault();

    if (!this.loginForm.valid) { return; }

    this.auth.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
      .then((token: any) => {
        this.router.navigate(['/recipes']);
      })
      .catch((e) => {
        this.error = e.statusText;
        Swal.fire({
          title: 'The login or password is invalid. Please try again',
          text: this.error,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      });
  }
}
