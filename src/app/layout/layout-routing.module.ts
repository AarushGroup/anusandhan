import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { StartUpsComponent } from '../start-ups/start-ups.component';
import { AgritechComponent } from '../agritech/agritech.component';
import { IncubationsInvestComponent } from '../incubations-invest/incubations-invest.component';

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


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
