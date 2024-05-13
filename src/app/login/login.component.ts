import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // constructor(private router: Router) { }

  // ngOnInit(): void {
  // }

  // onligin(){this.router.navigate(['/dashboard']);}


  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.router.navigate(['/dashboard']);
      // Your login logic here
      console.log("Form Submitted Successfully!");
    }
  }
}
