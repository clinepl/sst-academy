import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CultureNumeriqueComponent } from './pages/culture-numerique/culture-numerique.component';
import { CarnetDeBordComponent } from './pages/carnet-de-bord/carnet-de-bord.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { CursusComponent } from './pages/cursus/cursus.component';
import { FonctionnementAppliComponent } from './pages/fonctionnement-appli/fonctionnement-appli.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'culture', component: CultureNumeriqueComponent },
  { path: 'carnet-de-bord', component: CarnetDeBordComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'cursus', component: CursusComponent},
  { path: 'fonctionnement-appli', component: FonctionnementAppliComponent},
  { path: 'porfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const appRoutingComponents = [
HomeComponent,
CultureNumeriqueComponent,
CarnetDeBordComponent,
ConnexionComponent,
CursusComponent,
FonctionnementAppliComponent,
PortfolioComponent
];



