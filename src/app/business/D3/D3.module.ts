import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { D3RoutingModule } from './D3-routing.module';
import { D3Component } from './D3.component';
@NgModule({
    imports: [CommonModule, D3RoutingModule],
    declarations: [D3Component],
    exports: [D3Component]
})
export class D3Module { }
