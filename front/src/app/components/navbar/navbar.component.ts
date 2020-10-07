import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( public usuarioService:UsuarioService, private router:Router) {}

  ngOnInit() {
    $("#wrapper").toggleClass("toggled");
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  logout(){
    localStorage.removeItem('_id')
    localStorage.removeItem('tipo')
    this.router.navigateByUrl('')
  }

  buscar(titulo:string){
    this.router.navigate(['/buscador', titulo])
  }

}
