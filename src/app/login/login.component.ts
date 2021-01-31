import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AppService} from  '../app.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputValue;
  data = {
    firstName: "Oleg",
    lastName: "Dz"
    };
   isLoggedIn = true ;
   conditionNotLogin = false;
   login = "";
   profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    })
  });
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
               private router: Router,
              private service: AppService,
              ) { }

  
  ngOnInit(): void {
   }
  onSubmit() {
     console.log(this.profileForm.value.firstName , this.data.firstName);
     if((this.profileForm.value.firstName === this.data.firstName)&&
     (this.profileForm.value.lastName === this.data.lastName)) {
    this.authService.isLoggedIn = true;
    this.router.navigate([`/admin`]);
   
  }else{
    this.conditionNotLogin = !this.authService.isLoggedIn
  }
 
   //  console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }


 
 
}
