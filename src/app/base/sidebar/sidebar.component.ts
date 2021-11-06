import { Component, OnInit, EventEmitter, Output, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SidebarComponent implements OnInit {
  expanded: boolean = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Output() closeSideNav = new EventEmitter();

  constructor() { }

  onToggleClose() {
    this.closeSideNav.emit();
  }

  ngOnInit() { }
  onItemSelected() {
    // if (!item.children || !item.children.length) {
    //   //   this.router.navigate([item.route]);
    //   //   this.navService.closeNav();
    // }
    // if (item.children && item.children.length) {
    this.expanded = !this.expanded;
    // }
  }
}
