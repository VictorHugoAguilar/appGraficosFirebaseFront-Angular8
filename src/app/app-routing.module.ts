import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GotyComponent } from './pages/goty/goty.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'goty', component: GotyComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: [],
})

export class AppRoutingModule { }