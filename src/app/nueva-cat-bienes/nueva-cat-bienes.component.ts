import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CategoriaService } from '../shared/services/categoria.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nueva-cat-bienes',
  templateUrl: './nueva-cat-bienes.component.html',
  styleUrls: ['./nueva-cat-bienes.component.css']
})
export class NuevaCatBienesComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router, public formBuilder: FormBuilder, private categoriaService: CategoriaService) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
   }

  ngOnInit() {
  }
  guardar() {
    console.log(this.form.value);
    this.categoriaService.nuevaCategoriaBienes(this.form.value.nombre, this.form.value.descripcion).subscribe(() => {
      alert('Categoria creada');
      this.form.reset();
      this.router.navigate(['/adminHome']);
    }, error => {
      alert('Error Creando nueva categoria');
    });
  }
}
