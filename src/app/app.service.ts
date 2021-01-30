import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HEROES} from './moch-data';
import {Hero} from './hero'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Observable, of} from 'rxjs' ;
import {map} from'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {
   heroes$: Observable<any>;
   heroes: Hero[];
  constructor() { }
  getHeroes(){
    //  this.heroes$ = of(HEROES);
    //  return this.heroes$;
    return of(HEROES);
  };
  getHero(id: any){
   const hero = this.heroes.filter(item => item.id === id);
      console.log(hero);
      return hero;
  }
}
