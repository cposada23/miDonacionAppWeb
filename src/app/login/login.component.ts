import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from '../shared/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private router:Router, public formBuilder: FormBuilder, private auth:AuthService) {
    this.form = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  
  login(){
    const formValue = this.form.value;
    console.log(formValue);
    this.auth.login(formValue.email, formValue.password).then(auth =>{
      console.log("autenticado");
      this.router.navigate(['/adminHome']);
    }).catch(error=>{
      console.error(error);
    });

  }
}
