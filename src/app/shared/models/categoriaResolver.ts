import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Rx'
import { CategoriaBienes } from './categoriasBienes';
import { CategoriaService}  from '../services/categoria.service';

@Injectable()
export class CategoriaResolver implements Resolve<CategoriaBienes>{
    constructor(private categoriaService: CategoriaService){}
    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<any>{
        
       
        return this.categoriaService.getCategoriaBienesPorNombre(route.params['url'])
            .first();
    }

}