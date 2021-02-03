import { Component, OnInit } from '@angular/core';
import { CrisesService } from '../crises.service';

@Component({
  selector: 'app-manage-crises',
  templateUrl: './manage-crises.component.html',
  styleUrls: ['./manage-crises.component.css'],
  providers:[CrisesService]
})
export class ManageCrisesComponent implements OnInit {
   parent;
  constructor(private crisesService:CrisesService) { }
 

  ngOnInit(): void {
   
  }

}
