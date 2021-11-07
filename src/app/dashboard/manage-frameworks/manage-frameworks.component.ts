import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
declare var $: any;
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-manage-frameworks',
  templateUrl: './manage-frameworks.component.html',
  styleUrls: ['./manage-frameworks.component.scss']
})
export class ManageFrameworksComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  constructor(private _snackBar: MatSnackBar) { }
  selectedOptions: any = [];
  ngOnInit(): void {
  }
  openSnackBar() {
    const snackBarRef = this._snackBar.open(this.selectedOptions.length + ' actions selected.', 'ASSIGN RESPONSIBLE');
    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
      $('#exampleModal1').modal('show');
    });
  }
  onChange(event: any): void {
    this.openSnackBar()
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
