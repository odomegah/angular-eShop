import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './main/app.component';
import { ArticleModule } from './article/article.module';
import { PanierModule } from './panier/panier.module';
import { PaiementModule } from './paiement/paiement.module';
import { PartialsModule } from './partials/partials.module';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    PanierModule,
    PaiementModule,
    PartialsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
