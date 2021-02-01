import { ThisReceiver } from '@angular/compiler';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private _heroeService: HeroesService,
    private router:Router,
  ) { }

  ngOnInit(){
    this.heroes= this._heroeService.getHeroes();
    // console.log(this.heroes)
  }

  //para la ruta con el boton ver mas
  verHeroe(id:number){
    this.router.navigate(['/heroe',id]);
  }

  



}
