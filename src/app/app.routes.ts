
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroeComponent } from './components/heroe/heroe.component'
import { BuscarComponent } from './components/buscar/buscar.component'


const APP_ROUTES : Routes = [
//los path para la direccion, se deben importar en el app.module en la seccion imports
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },

  //pasarle un parametro id para ir a la otra pagina de heroe
  { path: 'heroe/:id', component: HeroeComponent },

  //para la busqueda
  {path: 'buscar/:termino', component: BuscarComponent },

  { path: '**', pathMatch:'full' , redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );