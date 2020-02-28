import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { D3RoutingModule } from './D3-routing.module';
import { D3Component } from './D3.component';
import { CommonTopoModule } from 'src/assets/common-topo/common-topo.module';
@NgModule({
    imports: [CommonModule, D3RoutingModule, CommonTopoModule],
    declarations: [D3Component],
    exports: [D3Component]
})
export class D3Module { }
