import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartUpsComponent } from './start-ups/start-ups.component';
import { IncubationsInvestComponent } from './incubations-invest/incubations-invest.component';
import { EHealthComponent } from './e-health/e-health.component';
import { EdtechComponent } from './edtech/edtech.component';
import { AgritechComponent } from './agritech/agritech.component';
import { EAutomobilesComponent } from './e-automobiles/e-automobiles.component';
import { RenewableEnergyComponent } from './renewable-energy/renewable-energy.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { EnvironmentComponent } from './environment/environment.component';
import { AboutComponent } from './about/about.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    StartUpsComponent,
    IncubationsInvestComponent,
    EHealthComponent,
    EdtechComponent,
    AgritechComponent,
    EAutomobilesComponent,
    RenewableEnergyComponent,
    LogisticsComponent,
    ScrollToTopComponent,
    EnvironmentComponent,
    AboutComponent,
    SpeakersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
