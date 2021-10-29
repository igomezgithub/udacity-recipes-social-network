import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditMode } from 'src/app/shared/enums/edit-mode.enum';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  error: string = '';

  // private auth: AuthService,
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      password_confirm: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+$')
      ]))
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(group: FormGroup) {
    return group.controls.password.value === group.controls.password_confirm.value ? null : { passwordsMisMatch: true };
  }

  geUsernameErrorMessage() {
    if (this.registerForm.controls.username.hasError('required')) {
      return 'You must enter your username';
    } else {
      return null;
    }
  }

  geEmailErrorMessage() {
    if (this.registerForm.controls.email.hasError('required')) {
      return 'You must enter a email';
    } else if (this.registerForm.controls.email.hasError('pattern')) {
      return 'You must enter a valid email address';
    } else {
      return null;
    }
  }

  getPasswordErrorMessage() {
    if (this.registerForm.controls.password.hasError('required')) {
      return 'You must enter your password';
    } else {
      return null;
    }
  }

  getConfirmPasswordErrorMessage() {
    if (this.registerForm.controls.password_confirm.hasError('required')) {
      return 'You must enter your confirm password';
    } else {
      return null;
    }
  }

  static basicDialogConfiguration(width: string, dialogData: any): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = width;
    dialogConfig.data = dialogData;
    return dialogConfig;
  }

  onSubmit($event: any) {
    $event.preventDefault();

    if (this.registerForm.controls.password.value !== this.registerForm.controls.password_confirm.value) {
      Swal.fire({
        title: 'Confirm Password does not match with your password',
        text: this.error,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }

    if (!this.registerForm.valid) { return; }

    const newuser: User = {
      email: this.registerForm.controls.email.value,
      username: this.registerForm.controls.username.value
    };

    this.auth.register(newuser, this.registerForm.controls.password.value)
      .then((token: any) => {
        Swal.fire({
          title: 'Ok!',
          text: 'User register susccessfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch((e) => {
        this.error = e.statusText;
        Swal.fire({
          title: 'User cannot register. Please try again',
          text: this.error,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      });
  }
}
