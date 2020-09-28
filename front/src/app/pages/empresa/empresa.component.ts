import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
    })
  }

  ngOnInit() {
  }

}
