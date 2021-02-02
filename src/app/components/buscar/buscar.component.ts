import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/service/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar:any[]= [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService: HeroesService ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.termino=params['termino'];
      this.buscar=this.heroesService.buscarHeroe(params['termino']);
      console.log(this.buscar)
     
    });
  }

}
