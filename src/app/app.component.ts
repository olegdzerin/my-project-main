import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, of, fromEvent } from 'rxjs';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-project-name';
  isLoggedIn: boolean ;
  constructor(private authService: AuthService,){

  };
   logout(){
     this.authService.logout();
   }
   ngOnInit(){
     this.isLoggedIn = this.authService.isLoggedIn
   
 this.isLoggedIn = this.authService.isLoggedIn;
  
  
}
ngAfterViewInit(){
}
}
