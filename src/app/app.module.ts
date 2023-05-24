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
import { SupportingOrganizationsComponent } from './sponsorships/supporting-organizations/supporting-organizations.component';
import { PrimePartnersComponent } from './sponsorships/prime-partners/prime-partners.component';
import { IndustryConnectComponent } from './industry-connect/industry-connect.component';
import { EventScheduleComponent } from './event-schedule/event-schedule.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';
import { EmergingTechnologiesComponent } from './emerging-technologies/emerging-technologies.component';
import { EnterprenuerComponent } from './enterprenuer/enterprenuer.component';
import { EnvironmentSeminarsComponent } from './environment-seminars/environment-seminars.component';
import { FintechComponent } from './fintech/fintech.component';
import { DronesComponent } from './drones/drones.component';
import { DronesSeminarsComponent } from './drones-seminars/drones-seminars.component';
import { DigitalHealthcareComponent } from './digital-healthcare/digital-healthcare.component';

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
    SupportingOrganizationsComponent,
    PrimePartnersComponent,
    IndustryConnectComponent,
    EventScheduleComponent,
    VenueDetailsComponent,
    EmergingTechnologiesComponent,
    EnterprenuerComponent,
    EnvironmentSeminarsComponent,
    FintechComponent,
    DronesComponent,
    DronesSeminarsComponent,
    DigitalHealthcareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
