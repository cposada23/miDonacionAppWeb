import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CategoriaService } from '../shared/services/categoria.service';
import {CategoriaBienes} from '../shared/models/categoriasBienes';
import {Router} from "@angular/router";
@Component({
  selector: 'app-c-bienes',
  templateUrl: './c-bienes.component.html',
  styleUrls: ['./c-bienes.component.css']
})
export class CBienesComponent implements OnInit {

  categoriasBienes$: Observable<CategoriaBienes[]>;

  constructor(private router:Router, private categoriaService:CategoriaService) {

   }

  ngOnInit() {
    this.categoriasBienes$ = this.categoriaService.getCategoriasBienes();
  }

  irDetalle(categoria){
    console.log(categoria);
    this.router.navigate(['/adminHome/detalleCategoriaBienes/' + categoria.nombre ]);

  }

}
