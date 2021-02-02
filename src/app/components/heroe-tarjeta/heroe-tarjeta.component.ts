import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {

  @Input() heroe:any={};
  @Input() index:number;

//evento que quiero que el padre este escuchando y que tipo de valor emite 
  @Output() heroeselec: EventEmitter<number>


  constructor(private router:Router) { 

    //inicializamos el eventemiter 
    this.heroeselec= new EventEmitter();

  }


  
  verHeroe(){
    //this.router.navigate(['/heroe',this.index]);

    //vamos a emitir el valor para esto debemos en el html hacerlo escuchar
    this.heroeselec.emit( this.index );
  }
}
