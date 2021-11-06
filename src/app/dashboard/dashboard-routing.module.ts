import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path:'frameworks',
        component:FrameworksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }