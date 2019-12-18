import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Table1Component } from './table1.component';
const table1Routs: Routes = [
    { path: '', component: Table1Component },
];
@NgModule({
    imports: [
        RouterModule.forChild(table1Routs)
    ],
    exports: [RouterModule]

}) export class TableRoutingModule {

}
