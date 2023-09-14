import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [HeaderComponent,FooterComponent,NotFoundComponent, SidebarComponent, AlertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  ,
  exports:[
    HeaderComponent,FooterComponent,NotFoundComponent, SidebarComponent, AlertComponent
  ]
})
export class PartialsModule { }
