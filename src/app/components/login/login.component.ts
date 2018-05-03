import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILogin } from '../../interfaces/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public username: String;

  constructor(private fb: FormBuilder, private router: Router) {
    this.initForm();
  }

  ngOnInit() { }

  initForm() {
    this.form = this.fb.group({
      'username': [null,
        [
          Validators.email,
          Validators.maxLength(50),
          Validators.required
          // TODO: custom synchronous validations
        ],
        [
          // TODO: asynchrounous valdiations
        ]
      ],
      'password': [null, [Validators.required]]
    });
  }

  login() {
    if (this.form.valid) {
      const data: ILogin = this.form.value;
      if (data.username === 'abc@a.com' && data.password === 'abc') {
        this.router.navigate(['/', 'home']);
      } else {
        alert('invalid credentials');
      }
    } else {
      alert('invalid form');
    }
  }
}
