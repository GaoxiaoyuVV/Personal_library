import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D3Component } from './D3.component';
const d3Routs: Routes = [
    { path: '', component: D3Component },
];
@NgModule({
    imports: [
        RouterModule.forChild(d3Routs)
    ],
    exports: [RouterModule]

}) export class D3RoutingModule {

}
