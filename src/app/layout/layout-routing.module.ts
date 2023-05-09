import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
