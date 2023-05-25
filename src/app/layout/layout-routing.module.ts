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
import { EnvironmentComponent } from '../environment/environment.component';
import { AdvantageComponent } from '../advantage/advantage.component';
import { AboutComponent } from '../about/about.component';
import { SpeakersComponent } from '../speakers/speakers.component';
import { SupportingOrganizationsComponent } from '../sponsorships/supporting-organizations/supporting-organizations.component';
import { EventPartnersComponent } from '../sponsorships/event-partners/event-partners.component';
import { PrimePartnersComponent } from '../sponsorships/prime-partners/prime-partners.component';
import { PremiumPartnersComponent } from '../sponsorships/premium-partners/premium-partners.component';
import { PrinciplePartnersComponent } from '../sponsorships/principle-partners/principle-partners.component';
import { PrincipleCoPartnersComponent } from '../sponsorships/principle-co-partners/principle-co-partners.component';
import { AssociatePartnersComponent } from '../sponsorships/associate-partners/associate-partners.component';
import { AssociateCoPartnersComponent } from '../sponsorships/associate-co-partners/associate-co-partners.component';
import { CorporatePartnersComponent } from '../sponsorships/corporate-partners/corporate-partners.component';
import { IndustryConnectComponent } from '../industry-connect/industry-connect.component';
import { EventScheduleComponent } from '../event-schedule/event-schedule.component';
import { VenueDetailsComponent } from '../venue-details/venue-details.component';
import { EmergingTechnologiesComponent } from '../emerging-technologies/emerging-technologies.component';
import { EnterprenuerComponent } from '../enterprenuer/enterprenuer.component';
import { EnvironmentSeminarsComponent } from '../environment-seminars/environment-seminars.component';
import { FintechComponent } from '../fintech/fintech.component';
import { DronesComponent } from '../drones/drones.component';
import { DronesSeminarsComponent } from '../drones-seminars/drones-seminars.component';
import { DigitalHealthcareComponent } from '../digital-healthcare/digital-healthcare.component';
import { RenewableEnergySeminarComponent } from '../renewable-energy-seminar/renewable-energy-seminar.component';
import { NextgenAgriSeminarComponent } from '../nextgen-agri-seminar/nextgen-agri-seminar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('../contact/contact.module').then((m) => m.ContactModule),
  },

  {
    path: 'advantage',
    loadChildren: () =>
      import('../advantage/advantage.module').then((m) => m.AdvantageModule),
  },

  { path: 'start-ups', component: StartUpsComponent },

  { path: 'agritech', component: AgritechComponent },

  { path: 'incubations-investments', component: IncubationsInvestComponent },

  { path: 'edtech', component: EdtechComponent },

  { path: 'e-automobiles', component: EAutomobilesComponent },

  { path: 'e-health', component: EHealthComponent },

  { path: 'renewable-energy', component: RenewableEnergyComponent },

  { path: 'logistics', component: LogisticsComponent },

  { path: 'environment', component: EnvironmentComponent },

  { path: 'advantage-anusandhaan', component: AdvantageComponent },

  { path: 'about', component: AboutComponent },

  { path: 'speakers', component: SpeakersComponent },
  {
    path: 'supporting-organizations',
    component: SupportingOrganizationsComponent,
  },

  { path: 'event-partners', component: EventPartnersComponent },

  { path: 'prime-partners', component: PrimePartnersComponent },

  { path: 'premium-partners', component: PremiumPartnersComponent },

  { path: 'principle-partners', component: PrinciplePartnersComponent },

  { path: 'principle-co-partners', component: PrincipleCoPartnersComponent },

  { path: 'associate-partners', component: AssociatePartnersComponent },

  { path: 'associate-co-partners', component: AssociateCoPartnersComponent },

  { path: 'corporate-partners', component: CorporatePartnersComponent },

  { path: 'industry-connect', component: IndustryConnectComponent },

  { path: 'event-schedule', component: EventScheduleComponent },

  { path: 'venue-details', component: VenueDetailsComponent },

  { path: 'emerging-technologies', component: EmergingTechnologiesComponent },

  { path: 'enterprenuer', component: EnterprenuerComponent },

  { path: 'environment-seminar', component: EnvironmentSeminarsComponent },

  { path: 'fintech', component: FintechComponent },

  { path: 'drones', component: DronesComponent },

  { path: 'drones-seminar', component: DronesSeminarsComponent },

  { path: 'digital-healthcare', component: DigitalHealthcareComponent },

  {
    path: 'renewable-energy-seminar',
    component: RenewableEnergySeminarComponent,
  },

  {
    path: 'nextGen-agri',
    component: NextgenAgriSeminarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
