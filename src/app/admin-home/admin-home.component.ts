import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) {

   }

  ngOnInit() {
  }

  

}
