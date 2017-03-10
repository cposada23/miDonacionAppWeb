import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { CategoriaBienes } from '../shared/models/categoriasBienes';
import {CategoriaService} from '../shared/services/categoria.service';
import { Observable  } from 'rxjs';

@Component({
  selector: 'app-nueva-sub-cat-bienes',
  templateUrl: './nueva-sub-cat-bienes.component.html',
  styleUrls: ['./nueva-sub-cat-bienes.component.css']
})
export class NuevaSubCatBienesComponent implements OnInit {
  categoria: CategoriaBienes;
  constructor(private route:ActivatedRoute, private categoriaService: CategoriaService ) { }

  ngOnInit() {
    this.route.params.switchMap(params => {
      const nombre = params['nombre'];
      console.log(nombre);
      return this.categoriaService.getCategoriaBienesPorNombre(nombre);
    }).subscribe(data=>{
      this.categoria = data;
      console.log(this.categoria);
    });
  }
}
