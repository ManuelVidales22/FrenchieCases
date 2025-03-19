import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';



export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent },

    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      useHash: true  // Esto puede ayudar con el enrutamiento en GitHub Pages
    })],
    exports: [RouterModule]
  })
  export class AppRoutes {}

