import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
/** Home component */
import { HomeComponent } from './home/home.component';

/**firebase */
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { authConfig } from '../environments/firebase.config';

/**servicios */
  /**auth */
  import { AuthService } from './shared/auth/auth.service';
  import { CategoriaService } from './shared/services/categoria.service';

/**Routes */
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';

import { CategoriaResolver } from './shared/models/categoriaResolver';

/**Componentes */
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NavComponent } from './nav/nav.component';
import { CBienesComponent } from './c-bienes/c-bienes.component';
import { CServiciosComponent } from './c-servicios/c-servicios.component';
import { NuevaCatBienesComponent } from './nueva-cat-bienes/nueva-cat-bienes.component';
import { NuevaCatServiciosComponent } from './nueva-cat-servicios/nueva-cat-servicios.component';
import { DetalleCatBienesComponent } from './detalle-cat-bienes/detalle-cat-bienes.component';
import { NuevaSubCatBienesComponent } from './nueva-sub-cat-bienes/nueva-sub-cat-bienes.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    NavComponent,
    CBienesComponent,
    CServiciosComponent,
    NuevaCatBienesComponent,
    NuevaCatServiciosComponent,
    DetalleCatBienesComponent,
    NuevaSubCatBienesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule
  ],
  providers: [AuthService, CategoriaService, CategoriaResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
