import { Injectable } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AppService} from  '../app.service';

import {Hero} from '../hero';
import {Observable, of} from 'rxjs' ;
import { switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  selectedId: number;
  heroes: Hero[];
 name: any;

  constructor(
    private route: ActivatedRoute,
             private router: Router,
            private service: AppService,
           
  ) {}
    heroes$: Observable<any> = this.route.paramMap.pipe(
    switchMap(params => {
      this.selectedId = Number(params.get('id'));
      return this.service.getHeroes();
    })
    );
    hero$: Observable<any> = this.route.paramMap
      
}
