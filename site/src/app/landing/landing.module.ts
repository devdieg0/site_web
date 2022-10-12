import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
})
export class LandingModule { }
