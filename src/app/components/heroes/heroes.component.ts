import { Component, OnInit } from '@angular/core';
//para utilizar el service se debe importar 
import { HeroesService, Heroe } from '../../service/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //variable para la lista
  heroes:Heroe[]=[];

  constructor(
    //para llamar al servicio debemos hacer unapropiedad privada
    private _heroeService: HeroesService
  ) { }

  ngOnInit(){

    this.heroes= this._heroeService.getHeroes();
    console.log(this.heroes)
  }

}
