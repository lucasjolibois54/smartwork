import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeroComponent } from 'src/app/components/home/hero/hero/hero.component';
import { SubHeroComponent } from 'src/app/components/home/subhero/sub-hero/sub-hero.component';
import { DemandingJobsComponent } from 'src/app/components/home/demaningjobs/demanding-jobs/demanding-jobs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HeroComponent,
    SubHeroComponent,
    DemandingJobsComponent
  ]
})
export class HomePageModule {}
