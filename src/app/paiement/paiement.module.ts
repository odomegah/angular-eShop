import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FactureComponent } from './facture/facture.component';



@NgModule({
  declarations: [
    DetailComponent,
    FactureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaiementModule { }
