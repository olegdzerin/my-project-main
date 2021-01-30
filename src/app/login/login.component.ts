import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AppService} from  '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  data = "Oleg"
   isLoggedIn = true ;
   conditionNotLogin = false;
   login = ""
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
               private router: Router,
              private service: AppService) { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){
    // this.authService.hideBtnLoginForEvent().subscribe((data) => {
    //      this.authService.isLoggedIn = true;
    //    });
   }
initLoggedIn(){
  if(this.login === this.data) {
    this.authService.isLoggedIn = true;
    this.router.navigate([`/admin`]);
   
  }else{
    this.conditionNotLogin = !this.authService.isLoggedIn
  }
 }
}
