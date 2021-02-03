import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminService} from './admin.service';
import { AdminSecondService} from './admin-second.service';
import { CrisesService} from './crises.service';
import { Crises} from './crises'
import {ParentService} from './parent.service'
import { from } from 'rxjs';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ],
  providers:[
   
     AdminService,
   
   {
    provide:AdminSecondService, useExisting: AdminService
  },
  // {
  //   provide: ParentService, useExisting:
  //   forwardRef(() => ManageCrisesComponent) 
  // }
  // { provide: Logger, useValue: SilentLogger }
  
  ]

})
export class AdminModule {}
