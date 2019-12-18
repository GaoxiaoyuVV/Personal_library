import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { TableCommonSettings } from './settings';
import * as $ from 'jquery';
import * as _ from 'lodash';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.less']
})
export class CommonTableComponent implements OnInit {
  @Input()
  settings: TableCommonSettings;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.initTablePageData();
  }

  public initTablePageData = function () {
    let tempArr = [];
    tempArr = this.cutTbodyData(this.settings.tbodyData, this.settings.pageSize);
    this.settings.currentPage = 1;
    this.settings.pageTbodyData = tempArr
    this.settings.tbodyData = tempArr[0]
    this.settings.totalPage = tempArr.length;
    this.settings.startIndex = 1;
    this.settings.endIndex = this.settings.pageSize;
    if (tempArr.length <= 8) {
      let displayPageList = [];
      for (let i = 1; i <= tempArr.length; i++) {
        displayPageList.push(i);
        this.settings.displayPageList = displayPageList;
      }
    } else {
      if (this.settings.currentPage <= 4) {
        let tempArr1 = [];
        for (var i = 1; i <= 6; i++) {
          tempArr1.push(i);
        }
        tempArr1.push('next');
        tempArr1.push(this.settings.totalPage - 1);
        tempArr1.push(this.settings.totalPage);
        this.settings.displayPageList = tempArr1
      } else {
        this.showMorePage('next');
      }
    }
  }

  public saveSourceData = function(){
    let sourceData = JSON.parse(JSON.stringify(this.settings.pageTbodySourceData));
    return sourceData;
  }

  // About change Icon
  /*
      order_by sortBy is key in settings
  */
  public sortTable = function ($e: any) {
    let sortIcon: any = 'fa fa-sort';
    let sortUpIcon: any = 'fa fa-sort-asc';
    let sortDownIcon: any = 'fa fa-sort-desc';
    let sort_i = $($e.target);
    let order_by = 'asc';
    const current_sort = sort_i.attr('class');
    this.settings.sortBy = sort_i.parent().attr('name');
    $(this.element.nativeElement.querySelectorAll('table th')).find('i').removeClass().addClass(sortIcon);
    //If you want to use element in angular , you should import ElementRef
    if (current_sort === sortIcon) {
      sort_i.removeClass(sortIcon);
      sort_i.addClass(sortUpIcon);
    } else if (current_sort === sortUpIcon) {
      sort_i.removeClass(sortIcon);
      sort_i.removeClass(sortUpIcon);
      sort_i.addClass(sortDownIcon);
      order_by = 'desc';
    } else if (current_sort === sortDownIcon) {
      sort_i.removeClass(sortIcon);
      sort_i.removeClass(sortDownIcon);
      sort_i.addClass(sortUpIcon);
    }
    this.settings.orderBy = order_by;
    this.settings.pageTbodyData = this.sortData(this.saveSourceData());
    this.settings.pageTbodyData = this.cutTbodyData(this.settings.pageTbodyData, this.settings.pageSize);
    this.settings.tbodyData = this.settings.pageTbodyData[this.settings.currentPage - 1];
  }

  //About sort function
  public byField = function(name: string, type: string) {
    return (o: any, p: any) => {
      let a, b;
      a = o[name];
      b = p[name];
      if (a === b) {
        return 0;
      }
      if (typeof (a) === typeof (b)) {
        if (type === 'desc') {
          return a > b ? -1 : 1;
        }
        return a < b ? -1 : 1;
      }
      if (type === 'desc') {
        return typeof a > typeof b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    };
  }

  //About private function to sort data and cut tbody data
  private sortData = function(d: any): any {
    if (d.sort) {
      return d.sort(this.byField(this.settings.sortBy, this.settings.orderBy));
    } else {
      return d;
    }
  }

  private cutTbodyData = function (arr: any, pageSize: number) {
    let index = 0;
    let newArray = [];
    while (index < arr.length) {
      newArray.push(arr.slice(index, index += pageSize));
    }
    return newArray;
  }

  //pagination
  public pageChange = function (changeTo: any) {
    var page = 1;
    if (changeTo == 'first') {
      page = 1;
      this.settings.startIndex = 1;
      this.settings.endIndex = this.settings.pageSize;
    } else if (changeTo == 'last') {
      page = this.settings.totalPage;
    } else if (changeTo >= 1 && changeTo <= this.settings.totalPage) {
      page = changeTo;
    }
    if (page >= 1 && page <= this.settings.totalPage) {
      //set page table data        
      this.settings.currentPage = page;
      this.settings.tbodyData = this.settings.pageTbodyData[this.settings.currentPage - 1];
      //set table left bottom item display
      this.settings.startIndex = (this.settings.currentPage - 1) * this.settings.pageSize + 1;
      if (this.settings.currentPage != this.settings.totalPage) {
        this.settings.endIndex = this.settings.currentPage * this.settings.pageSize;
      } else {
        this.settings.endIndex = this.settings.total;
      }
    }
  }

  public handlePage = function(){
    
  }

  //show more page function 
  /*
      something important!!
      for (let i = 1; i <= 6; i++) {
        this.settings.displayPageList.push(i);
      }
      this.settings.displayPageList.push('next');
      this.settings.displayPageList.push(this.settings.totalPage - 1);
      this.settings.displayPageList.push(this.settings.totalPage);
      you must choose 6 to range it , otherwise you will lose your page number !
  */
  public showMorePage = function (type: any, count: any) {
    this.settings.displayPageList = [];
    var startIndex = 1;
    count = count ? count : 0;
    if (type === 'next') {
      startIndex = this.settings.startIndexpage + count;
      endIndex = startIndex + 6 > this.settings.totalPage ? this.settings.totalPage : startIndex + 6;
    } else if (type === 'pre') {
      startIndex = this.settings.startIndexpage - count > 1 ? this.settings.startIndexpage - count : 1;
    }
    var endIndex = startIndex + 6 > this.settings.totalPage ? this.settings.totalPage : startIndex + 6;
    if (endIndex < this.settings.totalPage) {
      if (startIndex < 5) {
        for (let i = 1; i <= 6; i++) {
          this.settings.displayPageList.push(i);
        }
        this.settings.displayPageList.push('next');
        this.settings.displayPageList.push(this.settings.totalPage - 1);
        this.settings.displayPageList.push(this.settings.totalPage);
      } else {
        this.settings.displayPageList.push(1);
        this.settings.displayPageList.push(2);
        this.settings.displayPageList.push('pre');
        this.settings.displayPageList.push(startIndex);
        this.settings.displayPageList.push(startIndex + 1);
        this.settings.displayPageList.push(startIndex + 2);
        this.settings.displayPageList.push(startIndex + 3);
        this.settings.displayPageList.push(startIndex + 4);
        this.settings.displayPageList.push('next');
        this.settings.displayPageList.push(this.settings.totalPage - 1);
        this.settings.displayPageList.push(this.settings.totalPage);
      } 
    } else {
      if (startIndex < 5) {
        for (let i = 1; i <= 6; i++) {
          this.settings.displayPageList.push(i);
        }
        this.settings.displayPageList.push('next');
        this.settings.displayPageList.push(this.settings.totalPage - 1);
        this.settings.displayPageList.push(this.settings.totalPage);
      } else {
        this.settings.displayPageList.push(1);
        this.settings.displayPageList.push(2);
        this.settings.displayPageList.push('pre');
        for (var i = endIndex - 5; i <= endIndex; i++) {
          this.settings.displayPageList.push(i);
        }
      }
    }
    this.settings.startIndexpage = startIndex;
  }
}
