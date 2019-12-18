import { Component, OnInit, Input, Injector, AfterViewInit, ViewChild } from '@angular/core';
import { DialogOptions } from './dialogOptions';

@Component({
    selector: 'dynamic-dialog',
    templateUrl: './dynamicDialog.component.html',
    styleUrls: ['./dynamicDialog.component.less']
})
export class DynamicDialog implements OnInit, AfterViewInit {
    public option: any;
    constructor(
        public injector: Injector
    ) {
        this.option = this.injector.get('options');
    }

    ngOnInit() {
        //nothing to do 
    }

    ngAfterViewInit() {
        //nothing to do 

    }
}
