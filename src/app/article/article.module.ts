import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RouterModule, Routes } from '@angular/router';

const articleRoutes: Routes = [
  {path: '', component: ArticleListComponent},
  // {path: '', redirectTo: '/article', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(articleRoutes)
  ]
})
export class ArticleModule { }
