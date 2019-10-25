import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlumnsComponent } from './alumns/alumns.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { AlumnhistoryComponent } from './alumnhistory/alumnhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnsComponent,
    AlumnhistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [RestService ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
