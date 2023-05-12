import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { StartUpsComponent } from '../start-ups/start-ups.component';
import { AgritechComponent } from '../agritech/agritech.component';
import { IncubationsInvestComponent } from '../incubations-invest/incubations-invest.component';
import { EdtechComponent } from '../edtech/edtech.component';
import { EAutomobilesComponent } from '../e-automobiles/e-automobiles.component';
import { EHealthComponent } from '../e-health/e-health.component';
import { RenewableEnergyComponent } from '../renewable-energy/renewable-energy.component';
import { LogisticsComponent } from '../logistics/logistics.component';

const routes: Routes = [
  { 
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  { path: 'home',
  loadChildren: () => import('../home/home.module').then(m => m.HomeModule) 

},
{ path: 'contact-us', loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },

{ path: 'advantage', loadChildren: () => import('../advantage/advantage.module').then(m => m.AdvantageModule) },

{path: 'start-ups', component: StartUpsComponent},

{path: 'agritech', component: AgritechComponent},

{path: 'incubations-investments', component: IncubationsInvestComponent},

{path: 'edtech', component: EdtechComponent},

{path: 'e-automobiles', component: EAutomobilesComponent},

{path: 'e-health', component: EHealthComponent},

{path: 'renewable-energy', component: RenewableEnergyComponent},

{path: 'logistics', component: LogisticsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
