import { Component } from '@angular/core';

@Component({
  selector: 'app-communications-security',
  templateUrl: './communications-security.component.html',
  styleUrls: ['./communications-security.component.scss']
})
export class CommunicationsSecurityComponent {

  constructor() { }
  items: any = [];
  subItems:any=[];
  expandedIndex = 0;
  ngOnInit(): void {
    this.items = ['A.13.1 Network security management', 'A.13.2 Information transfer'];
    this.subItems = ['1','2']
  }

}
