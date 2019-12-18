import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  public menuType: string = 'normal';
  constructor() { }

  ngOnInit() {
  }

  public changeType(flag) {
    console.log(flag);
    if(flag){
      this.menuType = 'mini';
    } else {
      this.menuType = 'normal';
    }
  }

}
