import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CBienesComponent } from './c-bienes/c-bienes.component';
import { CServiciosComponent } from './c-servicios/c-servicios.component';
import { NuevaCatBienesComponent } from './nueva-cat-bienes/nueva-cat-bienes.component';
import {NuevaCatServiciosComponent } from './nueva-cat-servicios/nueva-cat-servicios.component';
import { DetalleCatBienesComponent }  from './detalle-cat-bienes/detalle-cat-bienes.component';
import { CategoriaResolver } from './shared/models/categoriaResolver';
import { NuevaSubCatBienesComponent } from './nueva-sub-cat-bienes/nueva-sub-cat-bienes.component';
export const routerConfig: Route[] =[
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'adminHome',
        component: AdminHomeComponent, 
        children:[
            {
                path:'cBienes',
                component:CBienesComponent
            },{
                path:'cServicios',
                component:CServiciosComponent
            },{
                path:'agregarCatBienes',
                component:NuevaCatBienesComponent
            },{
                path:'agregarCatServicios',
                component:NuevaCatServiciosComponent
            },{
                path:'nuevasubcategoria/:nombre',
                component: NuevaSubCatBienesComponent
            },{
                path:'detalleCategoriaBienes/:nombre',
                component:DetalleCatBienesComponent
            },{
                path:'',
                redirectTo:'cBienes',
                pathMatch: 'full'
            } 
        ]
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },{
        path:'**',
        redirectTo:'home'
    }

]