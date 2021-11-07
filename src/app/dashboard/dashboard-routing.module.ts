import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationsSecurityComponent } from './communications-security/communications-security.component';
import { ControlLibraryComponent } from './control-library/control-library.component';
import { DashboardComponent } from './dashboard.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { ManageFrameworksComponent } from './manage-frameworks/manage-frameworks.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'manage-framework',
        component: ManageFrameworksComponent
      },
      {
        path: 'frameworks',
        component: FrameworksComponent
      },
      {
        path: 'control-library',
        component: ControlLibraryComponent
      },
      {
        path: 'communications-security',
        component: CommunicationsSecurityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }