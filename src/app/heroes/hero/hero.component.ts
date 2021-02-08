import { Component, OnInit, OnChanges, Output, Input, EventEmitter  } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';


import {Observable, of} from 'rxjs' ;
// import { switchMap} from 'rxjs/operators';
import {HeroesService} from '../heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit , OnChanges{
  @Input() member;
  @Output() event: EventEmitter<any> = new EventEmitter(); 
  childName = 'childName';
  myClick: EventEmitter<any> = new EventEmitter();
  clickMessage: any = "clickMessage";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.myClick.subscribe(data => console.log(`data: ${data}`));
    this.heroesService.hero$.subscribe((params) => {
      console.log(params.valueOf(),params);
    })
  }
  ngOnChanges(){
    this.heroesService.hero$.subscribe((params) => {
      console.log(params.valueOf(),params);
  })
};

sendToParent(){
   this.event.emit(this.childName)

};
clickMessageFn(){
  this.myClick.emit(this.clickMessage);
};
myClickEmitFn(){
  console.log('emit')
}
}
