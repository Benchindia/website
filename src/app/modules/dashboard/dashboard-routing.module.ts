import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './layout/landing/landing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
},{
  path: 'contact-us',
  component: ContactUsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
