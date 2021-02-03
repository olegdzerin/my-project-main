import { LocationChangeListener } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ParentService } from '../parent.service';


@Component({
  selector: 'app-manage-heroes',
  templateUrl: './manage-heroes.component.html',
  styleUrls: ['./manage-heroes.component.css']
})
export class ManageHeroesComponent implements OnInit {
    parent = 'not good';
  constructor( private parentService: ParentService) { }

  ngOnInit(): void {
   // this.parent = this.parentService.parent
  }

}
