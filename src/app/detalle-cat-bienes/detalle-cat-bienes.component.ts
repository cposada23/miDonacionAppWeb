import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { CategoriaBienes } from '../shared/models/categoriasBienes';
import {CategoriaService} from '../shared/services/categoria.service';
import { Observable  } from 'rxjs';
@Component({
  selector: 'app-detalle-cat-bienes',
  templateUrl: './detalle-cat-bienes.component.html',
  styleUrls: ['./detalle-cat-bienes.component.css']
})
export class DetalleCatBienesComponent implements OnInit {
  categoria: CategoriaBienes;
  subcategoriasBienes$:Observable<any[]>;
  constructor(private route:ActivatedRoute, private categoriaService: CategoriaService ) {

    this.route.params.switchMap(params => {
      const nombre = params['nombre'];
      console.log(nombre);
      return this.categoriaService.getCategoriaBienesPorNombre(nombre);
    }).subscribe(data=>{
      this.categoria = data;
      console.log("Ver subcategorias de: ",this.categoria);
      this.subcategoriasBienes$ = this.categoriaService.getSubCategoriasPorCategoria(this.categoria.$key);
      /*this.subcategoriasBienes$.subscribe(subcat =>{
        console.log("subcategorias", subcat);
      });*/
    });
  }

  ngOnInit() {
  }

}
