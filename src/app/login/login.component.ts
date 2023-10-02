import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  // loginCredentials = {
  //   email: '',
  //   password: '',
  // };
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // showHeader(): boolean {
  //   const currentRoute = this.activeRoute.snapshot.url[0].path;
  //   return currentRoute !== 'login' && currentRoute !== 'register';
  // }

  // showFooter(): boolean {
  //   const currentRoute = this.activeRoute.snapshot.url[0].path;
  //   return currentRoute !== 'login' && currentRoute !== 'register';
  // }
}

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
//     });
//   }

//   // You can also create getter functions for form controls to access them easily in your template
//   get email() {
//     return this.loginForm.get('email');
//   }

//   get password() {
//     return this.loginForm.get('password');
//   }

//   // You can add a method to handle form submission
//   onSubmit() {
//     if (this.loginForm.valid) {
//       // Your form is valid, you can handle the login logic here
//       console.log('Form submitted with:', this.loginForm.value);
//     } else {
//       // Handle invalid form data or display validation errors
//       console.log('Form is invalid');
//     }
//   }
// }
