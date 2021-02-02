import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat } from 'rxjs';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  
  heroe:any = {}

  constructor(private activatedRouter: ActivatedRoute,
              private _heroeService:HeroesService
              ) {
    //obtener el parametro que viene por la url 
    
    this.activatedRouter.params.subscribe(params => {
      
      this.heroe=this._heroeService.getHeroe(params['id']);
      console.log(this.heroe)
      
    })
   }

 



}
