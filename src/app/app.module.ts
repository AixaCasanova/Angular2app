import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {RouterModule,Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PaginaNoencontradaComponent } from './pagina-noencontrada/pagina-noencontrada.component';

const rutasDeNavegacion: Routes = [{path:"login", component:LoginComponent},{path:"", redirectTo:'/login', pathMatch:'full'},{path:"**", component:PaginaNoencontradaComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNoencontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rutasDeNavegacion)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
