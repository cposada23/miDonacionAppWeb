import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef, AngularFire } from 'angularfire2';
import { CategoriaBienes } from '../models/categoriasBienes';
@Injectable()
export class CategoriaService {
  sdkDb: any;
  constructor(private af: AngularFire, private db:AngularFireDatabase, @Inject(FirebaseRef) fb) {
    this.sdkDb = fb.database().ref();
  }

  getCategoriasBienes(){
    return this.db.list('categoriasBienes').map(CategoriaBienes.fromjsonArray)
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

  nuevaCategoriaBienes(nombre:string, descripcion:string){
   const categoria = {
      nombre: nombre,
      descripcion: descripcion
    }
    const categoriaKey = this.sdkDb.child('categoriasBienes').push().key;
    let dataToSave = {};
    dataToSave["categoriasBienes/"+ categoriaKey]= categoria;
    return this.firebaseUpdate(dataToSave);
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
