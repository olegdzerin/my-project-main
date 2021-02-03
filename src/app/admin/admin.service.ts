import { Injectable } from '@angular/core';
import { AdminSecondService } from './admin-second.service';
import { AppService} from '../app.service'


@Injectable()
export class AdminService extends AdminSecondService {
  adminServiceProp:any = 'admin';
  hero: any;
  constructor(private appService: AppService) {
    super()
   }
  adminFn(){
  return this.adminServiceProp += this.adminServiceProp
}
 getHero(id: any){
    return this.appService.getHero(id);
 }
}

