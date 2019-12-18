import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Table2Component } from './table2.component';
const d3Routs: Routes = [
    { path: '', component: Table2Component },
];
@NgModule({
    imports: [
        RouterModule.forChild(d3Routs)
    ],
    exports: [RouterModule]

}) export class Table2RoutingModule {

}
