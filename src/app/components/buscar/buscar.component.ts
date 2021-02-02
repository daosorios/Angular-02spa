import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/service/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  @Input() buscar:any[]= [];
  @Input() index:number;
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService: HeroesService,
              private router:Router ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.termino=params['termino'];
      this.buscar=this.heroesService.buscarHeroe(params['termino']);
      console.log(this.buscar)
     
    });
  }

  verHeroe(){
    this.router.navigate(['/heroe',this.index]);
  }

}
