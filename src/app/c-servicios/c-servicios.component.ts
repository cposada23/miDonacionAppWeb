import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CategoriaService } from '../shared/services/categoria.service';
import {CategoriaBienes} from '../shared/models/categoriasBienes';
import { CategoriaServicio } from '../shared/models/categoriaServicio'; 
import {Router} from "@angular/router";
@Component({
  selector: 'app-c-servicios',
  templateUrl: './c-servicios.component.html',
  styleUrls: ['./c-servicios.component.css']
})
export class CServiciosComponent implements OnInit {
  categoriasServicios$ : Observable<CategoriaServicio[]>
  constructor(private router:Router, private categoriaService:CategoriaService) {

   }


  ngOnInit() {
    this.categoriasServicios$ = this.categoriaService.getCategoriasServicios();
  }

}
