import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AppService} from  '../app.service';
import { HeroesService} from './heroes.service'
import {Hero} from '../hero';
import {Observable, of} from 'rxjs' ;
import { switchMap} from 'rxjs/operators';
import { HeroComponent } from './hero/hero.component';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  //  directives: [HeroComponent]
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<any>;
  selectedId: number;
  heroes: Hero[];
  hero:Hero = {name:"noOne", id: 5};
 name: any;

constructor(private route: ActivatedRoute,
             private router: Router,
            private service: AppService,
            private heroesService: HeroesService
            ) { }

ngOnInit() {
  this.heroes$ = this.heroesService.heroes$;
  this.heroes$.subscribe((data) => {
    this.heroes = data;
  
  })
}

goToItem(hero: Hero, arg) {

  this.hero = hero;
  const heroId = hero ? hero.id.toString() : null;
  this.router.navigate([`/heroes/hero/${heroId}`]);
};
acceptFromChildren(arg){
  console.log(arg);
}

}
