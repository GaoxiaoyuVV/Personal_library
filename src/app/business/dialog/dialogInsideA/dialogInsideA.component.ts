import { Component, OnInit, Output, EventEmitter, Injector } from '@angular/core';
@Component({
    selector: 'dialog-a',
    templateUrl: './dialogInsideA.component.html',
    styleUrls: ['./dialogInsideA.component.less'],
})
export class DialogAComponent implements OnInit {
    public option: any;
    public parentOptions: any;
    constructor(
        public injector: Injector,
    ) {
        this.option = this.injector.get('dialogAOptions');
        this.parentOptions = this.injector.get('parentOptions');
    }

    ngOnInit() {
    }

    public close() {
        this.parentOptions.flag = false;
        this.parentOptions.componentRef.destroy();
    }

}
