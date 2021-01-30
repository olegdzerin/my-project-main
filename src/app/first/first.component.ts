// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
// import { AppService } from '../app.service';
// import {HEROES} from '../moch-data'

// @Component({
//   selector: 'app-first',
//   templateUrl: './first.component.html',
//   styleUrls: ['./first.component.css']
// })
// export class FirstComponent implements OnInit {
//   heroes$: Observable<any>;
// selectedId: number;
// heroes = HEROES;

//   constructor(private route: ActivatedRoute,
//                private service: AppService) { }

//   ngOnInit(): void {
//       this.heroes$ = this.route.paramMap.pipe(
//       switchMap(params => {
//         this.selectedId = Number(params.get('id'));
//         return this.service.getHeroes();
//       })
//     );
//   }

// }


import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AppService} from  '../app.service';
import {Hero} from '../hero';
import {Observable, of} from 'rxjs' ;
import { switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
    heroes$: Observable<any>;
    selectedId: number;
    heroes: Hero[];
   name: any;

  constructor(private route: ActivatedRoute,
               private router: Router,
              private service: AppService
              ) { }

  ngOnInit() {
    //  this.service.getHeroes().subscribe(
    //   data => {
    //     this.heroes = data;
    //     console.log(this.heroes);
    //   }
    //  );
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        console.log(params);
        this.selectedId = Number(params.get('id'));
        return this.service.getHeroes();
      })
    );

   
  }
  commitSubscribe(){
    this.heroes$.subscribe(data => {
      console.log(data);
      this.heroes = data
    });
  }

  
  logItemId(hero: Hero) {
    const heroId = hero ? hero.id.toString() : null;
    console.log(typeof(heroId));
    // this.router.navigate(['/heroes', { id: 2 }]);
    this.router.navigate([`/heroes/${heroId}`]);

  }

}




