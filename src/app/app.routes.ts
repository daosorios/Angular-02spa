
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'



const APP_ROUTES : Routes = [
//los path para la direccion, se deben importar en el app.module en la seccion imports
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch:'full' , redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );