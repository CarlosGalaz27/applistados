import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { AboutComponent } from './pages/about/about.component';

const app_routes:Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'nuevo-colegio/:id', component : MainComponent},
    {path : 'lista-colegios', component : ListaComponent},
    {path : 'about' , component : AboutComponent},
    {path : '**', pathMatch : 'full', redirectTo : 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash :true })
    ],
exports: [
    RouterModule
]
})

export class AppRoutingModule{}