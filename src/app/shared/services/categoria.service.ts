import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef, AngularFire } from 'angularfire2';
import { CategoriaBienes } from '../models/categoriasBienes';
import { CategoriaServicio } from '../models/categoriaServicio';

@Injectable()
export class CategoriaService {
  sdkDb: any;
  constructor(private af: AngularFire, private db:AngularFireDatabase, @Inject(FirebaseRef) fb) {
    this.sdkDb = fb.database().ref();
  }

  getCategoriasBienes(){
    return this.db.list('categoriasBienes').map(CategoriaBienes.fromjsonArray)
  }

  getCategoriasServicios(){
    return this.db.list('categoriasServicios').map(CategoriaServicio.fromjsonArray)
  }

  getCategoriaBienesPorNombre(nombre:string):Observable<CategoriaBienes>{
    return this.db.list('categoriasBienes', {
      query:{
        orderByChild: 'nombre',
        equalTo: nombre
      }
    }).filter(results => results && results.length>0)
    .map(results => CategoriaBienes.fromJson(results[0]));
  }

  nuevaCategoriaServicios(nombre: string, descripcion: string){
   const categoria = {
      nombre: nombre,
      descripcion: descripcion
    };
    const categoriaKey = this.sdkDb.child('categoriasServicios').push().key;
    let dataToSave = {};
    dataToSave['categoriasServicios/'+ categoriaKey] = categoria;
    return this.firebaseUpdate(dataToSave);
  }
  nuevaCategoriaBienes(nombre: string, descripcion: string) {
   const categoria = {
      nombre: nombre,
      descripcion: descripcion
    }
    const categoriaKey = this.sdkDb.child('categoriasBienes').push().key;
    let dataToSave = {};
    dataToSave["categoriasBienes/"+ categoriaKey]= categoria;
    return this.firebaseUpdate(dataToSave);
  }


  nuevaSubcategoriaBienes(subcategoria:any):Observable<any>{
    
    const subCategoriaToSave = {
      nombre: subcategoria.nombre,
      //descripcion: subcategoria.descripcion,
      categoriaKey: subcategoria.categoria.$key,
      categoria: subcategoria.categoria.nombre
    }
    const subCategoriaKey = this.sdkDb.child('subCategoriasBienes').push().key;
    let dataToSave = {};
    dataToSave["subCategoriasBienes/" + subCategoriaKey] = subCategoriaToSave;
    dataToSave[`subCategoriaPorCategoriasBienes/${subcategoria.categoria.$key}/${subCategoriaKey}`] = true;

    return this.firebaseUpdate(dataToSave);
  }


  /**
   * Obtiene las llaves de las subcategorias que pertenecen a una categoria especifica
   * @param categoriaId $key de la categoria a la que quiero obtener las subcategorias
   */
  getSubCategoriasKeysPorCategoria(categoriaId:string):Observable<string[]>{
    return this.db.list(`subCategoriaPorCategoriasBienes/${categoriaId}`).map(scspc =>scspc.map(scpc=>scpc.$key));
  }

 
  /**
   * scspc -> SubCategoriasPorCategoria
   * scpc  -> SubCategoriaPorCategoria
   * @param subCategoriasKeys$ las llaves de todas las subcategorias pertenecientes a una categoria
   */
  getSubCategoriasPorSubCategoriaKey(subCategoriasKeys$:Observable<string[]>):Observable<any[]>{
    return subCategoriasKeys$.map(scspc => scspc.map(key => this.db.object(`subCategoriasBienes/${key}`)))
    .flatMap(fbojs => Observable.combineLatest(fbojs));
  }

  /**
   * Retorna las subCategorias de una categoria de bienes
   * @param categoriaId $key de la categoria a la que se quiere obtener todas las subcategorias
   */
  getSubCategoriasPorCategoria(categoriaId:string):Observable<any[]>{
    return this.getSubCategoriasPorSubCategoriaKey(this.getSubCategoriasKeysPorCategoria(categoriaId));
  }


  firebaseUpdate(dataToSave){
      const subject = new Subject();
      this.sdkDb.update(dataToSave).then(
        val=>{
          subject.next(val);
          subject.complete();
        },
        err=>{
          subject.error(err);
          subject.complete();
        }
      );
      return subject.asObservable();
  }

  
}
