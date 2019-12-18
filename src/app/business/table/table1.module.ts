import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableRoutingModule } from './table1-routing.module';
import { Table1Component } from './table1.component';
import { CommonTableModule } from 'src/assets/common-table/common-table.module';
@NgModule({
    imports: [CommonModule, TableRoutingModule, CommonTableModule],
    declarations: [Table1Component],
    exports: [Table1Component]
})
export class TableModule { }
