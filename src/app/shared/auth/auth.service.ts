import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase } from 'angularfire2'; 
import { Usuario } from '../models/usuario';
@Injectable()
export class AuthService {
  usuario:Usuario;
  autenticado:boolean = false;

  constructor(private af: AngularFire, private db: AngularFireDatabase) {
    this.af.auth.subscribe(auth => {
      if(auth){
        this.autenticado = true;
        this.getUsuarioActivo(auth.uid).subscribe(usuario=>{
          this.usuario = Usuario.fromJson(usuario);
          console.log("Usuario Activo ",this.usuario);
        
        });
      }else{
        this.autenticado = false;
      }
      console.log("en el service",this.autenticado);
    });
   }


   getUsuarioActivo(uid){
    return this.db.object('usuarios/'+uid);  
   }


   login(email:string, password:string){
     return this.af.auth.login({email, password});
   }

   logout(){
     
     this.usuario = null;
     return this.af.auth.logout();
   }

   
}
