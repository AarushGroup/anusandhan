import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvantageRoutingModule } from './advantage-routing.module';
import { AdvantageComponent } from './advantage.component';


@NgModule({
  declarations: [
    AdvantageComponent
  ],
  imports: [
    CommonModule,
    AdvantageRoutingModule
  ]
})
export class AdvantageModule { }
