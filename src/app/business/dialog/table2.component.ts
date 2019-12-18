import { Component, OnInit, ViewChild, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, ElementRef, ReflectiveInjector, AfterViewInit, ViewChildren } from '@angular/core';
import { CommonDialog } from '../../../assets/common-dialog/common-dialog.component';
import { DialogOptions } from 'src/assets/common-dialog/dialogOptions';
import { DialogAComponent } from './dialogInsideA/dialogInsideA.component';
import { DialogBComponent } from './dialogInsideB/dialogInsideB.component';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.less']
})
export class Table2Component implements OnInit, AfterViewInit {
  public dialogAOptions: DialogOptions;
  public dialogBOptions: DialogOptions;
  @ViewChildren(CommonDialog) CommonDialogArr: CommonDialog;
  ADynamicDialog: CommonDialog;
  BDynamicDialog: CommonDialog;
  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public app: ApplicationRef,
    public eleRef: ElementRef,
    public injector: Injector
  ) { }

  ngOnInit() {
    this.dialogAOptions = this.initdialogAOptions();
    this.dialogBOptions = this.initdialogBOptions();
  }

  ngAfterViewInit() {
    //实例化@ViewChildren并赋值
    this.ADynamicDialog = this.CommonDialogArr['_results'][0];
    this.BDynamicDialog = this.CommonDialogArr['_results'][1];
  }

  public showDialogA() {
    //生成外面的dialog框
    this.ADynamicDialog.creatDialog();
    //动态添加框里面的内容
    let component: any;
    const resolvedInputs = ReflectiveInjector.resolve([{ provide: 'dialogAOptions', useValue: this.ADynamicDialog }, { provide: 'parentOptions', useValue: this.ADynamicDialog.options }]);
    const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.injector);
    //dialog里面的组件
    component = this.componentFactoryResolver.resolveComponentFactory(DialogAComponent);
    let componentRef = component.create(injector);
    this.app.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.getElementById("commonDialogBody").appendChild(domElem);
  }

  public showDialogB() {
    //生成外面的dialog框
    this.ADynamicDialog.creatDialog();
    //动态添加框里面的内容
    let component: any;
    const resolvedInputs = ReflectiveInjector.resolve([{ provide: 'dialogBOptions', useValue: this.ADynamicDialog }, { provide: 'parentOptions', useValue: this.ADynamicDialog.options }]);
    const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.injector);
    //dialog里面的组件
    component = this.componentFactoryResolver.resolveComponentFactory(DialogBComponent);
    let componentRef = component.create(injector);
    this.app.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.getElementById("commonDialogBody").appendChild(domElem);
  }

  public initdialogAOptions() {
    const options = {
      type: 'dynamicDialog',
      overlayClosable: false,
      showTimesIcon: true,
      flag: false,
    };
    return options
  }

  public initdialogBOptions() {
    const options = {
      type: 'dynamicDialog',
      overlayClosable: false,
      showTimesIcon: true,
      flag: false,
    };
    return options
  }

  public clickTest() {
    console.log("click test")
  }
}
