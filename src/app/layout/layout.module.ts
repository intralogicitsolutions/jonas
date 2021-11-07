import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { ManageFrameworksComponent } from './manage-frameworks/manage-frameworks.component';
import { SharedModule } from '../modules/shared/shared.module';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { ControlLibraryComponent } from './control-library/control-library.component';
import { CommunicationsSecurityComponent } from './communications-security/communications-security.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    ManageFrameworksComponent,
    FrameworksComponent,
    ControlLibraryComponent,
    CommunicationsSecurityComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ]
})
export class LayoutModule { }
