import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminSecondService } from '../admin-second.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   admin;
   adminSecond;
  constructor(
     private adminService: AdminService,
    private adminSecondService: AdminSecondService) { }

  ngOnInit(): void {
     this.admin = this.adminService.adminFn();
    this.adminSecond = this.adminSecondService.adminServiceProp;
    this.adminSecondService.adminFn();
  }

}
