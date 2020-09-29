import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ListaOfertasComponent } from './components/lista-ofertas/lista-ofertas.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { FormOfertaComponent } from './pages/form-oferta/form-oferta.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { CardOfertaComponent } from './components/card-oferta/card-oferta.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { ListaSolicitudesComponent } from './components/lista-solicitudes/lista-solicitudes.component';
import { CardSolicitudComponent } from './components/card-solicitud/card-solicitud.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    ListaOfertasComponent,
    OfertasComponent,
    FormOfertaComponent,
    OfertaComponent,
    EmpresaComponent,
    FechaPipe,
    CardOfertaComponent,
    SolicitudesComponent,
    ListaSolicitudesComponent,
    CardSolicitudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
