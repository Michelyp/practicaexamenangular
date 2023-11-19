import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { routing, appRoutingProvider } from './app.routing'; 
import {HttpClientModule} from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AlumnosService } from './services/alumnos.service';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListaalumnosComponent } from './listaalumnos/listaalumnos.component';
import { DetallealumnoComponent } from './detallealumno/detallealumno.component';
import { AlumnosMenuComponent } from './alumnos-menu/alumnos-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegistrarComponent,
    ListaalumnosComponent,
    DetallealumnoComponent,
    AlumnosMenuComponent
  ],
  imports: [
    BrowserModule,
    routing, HttpClientModule, FormsModule
  ],
  providers: [appRoutingProvider, AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
