import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router';
import { AlumnsComponent } from './alumns/alumns.component'
import { AlumnhistoryComponent } from './alumnhistory/alumnhistory.component'

const routes: Routes = [
  { path: 'Group/:id', component: AlumnsComponent },
  { path: 'Record/:id', component: AlumnhistoryComponent}
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
