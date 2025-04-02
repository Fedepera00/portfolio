import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CompetenzeComponent } from './pages/competenze/competenze.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { ChiSonoComponent } from './pages/chi-sono/chi-sono.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chi-siamo', component: ChiSonoComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'competenze', component: CompetenzeComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
