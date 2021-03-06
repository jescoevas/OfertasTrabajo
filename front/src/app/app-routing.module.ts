import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { FormOfertaComponent } from './pages/form-oferta/form-oferta.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ofertas/:id', component: OfertasComponent },
  { path: 'oferta/new', component: FormOfertaComponent },
  { path: 'oferta/:id', component: OfertaComponent },
  { path: 'empresa/:id', component: EmpresaComponent },
  { path: 'demandante/:demandanteId/solicitudes', component: SolicitudesComponent},
  { path: 'empresa/:empresaId/solicitudes', component: SolicitudesComponent},
  { path: 'demandante/:id/curriculum', component: CurriculumComponent },
  { path: 'buscador/:titulo', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
