import { Component, OnInit, Input, ViewChild, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, ElementRef, ReflectiveInjector, AfterViewInit } from '@angular/core';
import { DialogOptions } from './dialogOptions';
import { DynamicDialog } from 'src/assets/common-dialog/dynamicDialog.component';

@Component({
    selector: 'common-dialog',
    template: `<ng-content></ng-content>`
})
export class CommonDialog implements OnInit, AfterViewInit {
    @Input() options: DialogOptions;
    constructor(
        public componentFactoryResolver: ComponentFactoryResolver,
        public app: ApplicationRef,
        public eleRef: ElementRef,
        public injector: Injector
    ) { }

    ngOnInit() {
        //nothing to do
    }

    ngAfterViewInit() {
        // After ngOnInit but nothing to do
    }

    public creatDialog() {
        //初始化dialog
        let component: any;
        this.options.flag = true;
        const resolvedInputs = ReflectiveInjector.resolve([{ provide: 'options', useValue: this.options }]);
        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.injector);
        component = this.componentFactoryResolver.resolveComponentFactory(DynamicDialog);
        let componentRef = component.create(injector);
        //将组件注册（否则更改之后将无法生效）
        this.app.attachView(componentRef.hostView);
        //将组件的rootNodes添加到之前创建的视图上
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);
        this.options.componentRef = componentRef;
        console.log(this.options)
    }
}