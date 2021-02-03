import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminSecondService } from '../admin-second.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  admin;
  adminSecond;
  hero:any = {
    id:55,
    name: 'olgaVolga'
  };
  hero1
 constructor(
    private adminService: AdminService,
   private adminSecondService: AdminSecondService) { }


  ngOnInit(): void {
    this.admin = this.adminService.adminFn();
    this.adminSecond = this.adminSecondService.adminServiceProp;
    this.hero = this.adminService.getHero(1)[0];
    // console.log(this.hero1);
  }

}
