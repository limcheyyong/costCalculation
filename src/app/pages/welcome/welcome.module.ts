import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainDetialComponent } from './main-detial/main-detial.component';
import { ShareDetialComponent } from './share-detial/share-detial.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  imports: [WelcomeRoutingModule, SharedModule, ReactiveFormsModule],
  declarations: [WelcomeComponent, MainDetialComponent, ShareDetialComponent, PersonDetailComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
