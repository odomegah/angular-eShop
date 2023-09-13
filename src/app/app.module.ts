import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './main/app.component';
import { HeaderComponent } from './main/common/header/header.component';
import { FooterComponent } from './main/common/footer/footer.component';
import { ArticleModule } from './article/article.module';
import { NotFoundComponent } from './main/common/not-found/not-found.component';
import { PanierModule } from './panier/panier.module';
import { PaiementModule } from './paiement/paiement.module';

const routes: Routes = [
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    PanierModule,
    PaiementModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
