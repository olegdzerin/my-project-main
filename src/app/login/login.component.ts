import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AppService} from  '../app.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  inputValue;
  data = "Oleg"
   isLoggedIn = true ;
   conditionNotLogin = false;
   login = "";
   nameControl = new FormControl('');
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
               private router: Router,
              private service: AppService,
              ) { }

  
  ngOnInit(): void {
      this.nameControl.valueChanges.subscribe(value => this.inputValue = value)

  }
  ngAfterViewInit(){
   }
initLoggedIn(){

  if(this.inputValue === this.data) {
  // if(this.nameControl.value === this.data) {
    this.authService.isLoggedIn = true;
    this.router.navigate([`/admin`]);
   
  }else{
    this.conditionNotLogin = !this.authService.isLoggedIn
  }
 }
}
