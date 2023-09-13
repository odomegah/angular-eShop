import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RouterModule, Routes } from '@angular/router';

const PanierRoutes: Routes = [
  {path: 'panier', component: ListComponent},
  {path: 'panier/favories', component: FavoriteComponent}
]


@NgModule({
  declarations: [
    ListComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PanierRoutes)
  ]
})
export class PanierModule { }
