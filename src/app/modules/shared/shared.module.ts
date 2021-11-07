import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    CdkAccordionModule,
    MatCheckboxModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatChipsModule
  ],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatFormFieldModule, MatCardModule, MatProgressBarModule, MatGridListModule, CdkAccordionModule, MatCheckboxModule]
})
export class SharedModule { }