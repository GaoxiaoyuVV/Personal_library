import { Component, OnInit, Output, EventEmitter, Injector } from '@angular/core';
@Component({
    selector: 'dialog-a',
    templateUrl: './dialogInsideB.component.html',
    styleUrls: ['./dialogInsideB.component.less'],
})
export class DialogBComponent implements OnInit {
    public option: any;
    public parentOptions: any;
    constructor(
        public injector: Injector,
    ) {
        this.option = this.injector.get('dialogBOptions');
        this.parentOptions = this.injector.get('parentOptions');
    }

    ngOnInit() {
    }

    public close() {
        this.parentOptions.flag = false;
        this.parentOptions.componentRef.destroy();
    }

}
