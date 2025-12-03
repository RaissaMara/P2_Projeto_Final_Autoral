import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SolucoesComponent } from './componentes/solucoes/solucoes.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"solucoes", component:SolucoesComponent},
    {path:"", redirectTo:"home", pathMatch:"full"}
];
