import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Table2RoutingModule } from './table2-routing.module';
import { Table2Component } from './table2.component';
import { DialogAComponent } from './dialogInsideA/dialogInsideA.component';
import { DialogBComponent } from './dialogInsideB/dialogInsideB.component';
import { CommonDialogModule } from 'src/assets/common-dialog/common-table.module';
@NgModule({
    imports: [CommonModule, Table2RoutingModule, CommonDialogModule],
    declarations: [Table2Component, DialogAComponent, DialogBComponent],
    entryComponents: [DialogAComponent, DialogBComponent],
    exports: [Table2Component]
})
export class Table2Module { }
