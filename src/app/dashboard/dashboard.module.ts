import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageFrameworksComponent } from './manage-frameworks/manage-frameworks.component';
import { SharedModule } from '../modules/shared/shared.module';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { ControlLibraryComponent } from './control-library/control-library.component';
import { CommunicationsSecurityComponent } from './communications-security/communications-security.component';


@NgModule({
  declarations: [
    ManageFrameworksComponent,
    FrameworksComponent,
    ControlLibraryComponent,
    CommunicationsSecurityComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }