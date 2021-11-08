import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatChipInputEvent } from '@angular/material/chips';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-communications-security',
  templateUrl: './communications-security.component.html',
  styleUrls: ['./communications-security.component.scss']
})

export class CommunicationsSecurityComponent {

  items: any = [];
  subItems: any = [];
  expandedIndex = 0;
  selectedOptions: any = [];
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];
  constructor(private _snackBar: MatSnackBar, private toastr: ToastrService) { }

  openSnackBar() {
    const snackBarRef = this._snackBar.open(this.selectedOptions.length + ' actions selected.', 'ASSIGN RESPONSIBLE');
    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
      $('#exampleModal1').modal('show');
    });
  }
  showSuccess() {
    $('#exampleModal1').modal('hide');
    this.toastr.success('The responsibles will be notified by email containing necessary instructions..', 'The action were successfully assigned.',{closeButton:true});
  }
  ngOnInit(): void {
    this.items = ['A.13.1 Network security management', 'A.13.2 Information transfer'];
    this.subItems = ['1', '2']
  }
  onChange(event: any): void {
    $('#exampleModal').modal('show');
  }
  onChangeModel(event: any): void {
    this.openSnackBar();
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
