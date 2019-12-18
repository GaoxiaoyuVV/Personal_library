import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Output()
  changeMenuType = new EventEmitter<any>();
  public clickChangeMenu: boolean = false;

  constructor(public router: Router) {

  }

  ngOnInit() {

  }

  public changeType() {
    this.clickChangeMenu = !this.clickChangeMenu;
    this.changeMenuType.emit(this.clickChangeMenu);
  }

}
