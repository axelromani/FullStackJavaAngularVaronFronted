import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListarComponent } from './componentesz/listar/listar.component';
import { NavegarComponent } from './componentesz/navegar/navegar.component';
import { GrabarComponent } from './componentesz/grabar/grabar.component';

import { VaronService } from './serviciosz/varon.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NavegarComponent,
    GrabarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VaronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
