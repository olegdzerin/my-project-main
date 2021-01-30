
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService} from  '../app.service';
import {Hero} from '../hero';
import { switchMap} from 'rxjs/operators'


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  heroes$: Observable<any>;
    heroes: Hero[];
   name: any;
   hero: Hero;
   selectedId;

  constructor(private route: ActivatedRoute,
               private router: Router,
              private service: AppService
              ) { }

  ngOnInit() {
   //  const heroId = this.route.snapshot.paramMap.get('id');
    // this.hero$ = this.service.getHero(heroId);
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['id'];
    //   console.log(params);
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        console.log(params);
        this.selectedId = Number(params.get('id'));
        return this.service.getHeroes();
      })
    );

  
    
    

    //  this.hero = this.service.getHero(Number(heroId))[0];
    // console.log(this.hero);
  }
  commitSubscribe(){
    this.heroes$.subscribe(data => {
      console.log(data);
      this.heroes = data
    });
    this.hero = this.heroes.filter(item => item.id === this.selectedId)[0]
  }


  
  // gotoItems(hero: Hero) {
  //   const heroId = hero ? hero.id : null;
  //   // Pass along the hero id if available
  //   // so that the HeroList component can select that item.
  //   this.router.navigate(['/heroes', { id: heroId }]);
  // }

}
