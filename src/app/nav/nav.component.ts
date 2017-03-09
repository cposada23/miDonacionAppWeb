import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }


  logout(){
    this.auth.logout().then(()=>{
      this.router.navigate(['/home']);
    });
  }
}
