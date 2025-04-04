import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChiSonoComponent } from './pages/chi-sono/chi-sono.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CompetenzeComponent } from './pages/competenze/competenze.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChiSonoComponent,
    PortfolioComponent,
    CompetenzeComponent,
    ContattiComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
