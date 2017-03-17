import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { CategoriaBienes } from '../shared/models/categoriasBienes';
import {CategoriaService} from '../shared/services/categoria.service';
import { Observable  } from 'rxjs';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-nueva-sub-cat-bienes',
  templateUrl: './nueva-sub-cat-bienes.component.html',
  styleUrls: ['./nueva-sub-cat-bienes.component.css']
})
export class NuevaSubCatBienesComponent implements OnInit {
  categoria: CategoriaBienes;
  form:FormGroup;
  constructor( public formBuilder: FormBuilder,private route:ActivatedRoute, private categoriaService: CategoriaService ) { 
    this.form = this.formBuilder.group({
      nombre:['', Validators.required],
      //descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.switchMap(params => {
      const nombre = params['nombre'];
      console.log(nombre);
      return this.categoriaService.getCategoriaBienesPorNombre(nombre);
    }).subscribe(data=>{
      this.categoria = data;
      console.log("categoria en subcategoria ",this.categoria);
    });
  }

  guardarSubcategoria(){
    let subCategoria = this.form.value;
    subCategoria['categoria'] = this.categoria;
    this.categoriaService.nuevaSubcategoriaBienes(subCategoria).subscribe(()=>{
      alert('Subcategoria Creada');
      this.form.reset();
    },error=>{
      alert('error creado subcategoria');
      console.error(error);
    });

  }

}
