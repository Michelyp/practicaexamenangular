import { Routes, RouterModule } from "@angular/router"; 
import { ModuleWithProviders } from "@angular/core"; 
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";
import { DetallealumnoComponent } from "./detallealumno/detallealumno.component";
import { ListaalumnosComponent } from "./listaalumnos/listaalumnos.component";
import { AlumnosMenuComponent } from "./alumnos-menu/alumnos-menu.component";


const appRoutes: Routes = [ 

 {path: "", component: HomeComponent}, 
 {path: "login", component: LoginComponent},
 {path: "registrar", component: RegistrarComponent},
 {path: "curso/:annyo", component: ListaalumnosComponent},
 {path: "detalle/:idAlumno", component: DetallealumnoComponent},
 {path: "alumnos", component: AlumnosMenuComponent},


] 

export const appRoutingProvider: any[] = []; 

export const routing: ModuleWithProviders<any> =  

RouterModule.forRoot(appRoutes); 