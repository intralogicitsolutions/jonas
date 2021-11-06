import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageFrameworksComponent } from './manage-frameworks/manage-frameworks.component';
import { SharedModule } from '../modules/shared/shared.module';


@NgModule({
  declarations: [
    ManageFrameworksComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }