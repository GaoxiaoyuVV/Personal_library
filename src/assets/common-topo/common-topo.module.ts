import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommonTopoComponent } from './common-topo.component';
@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [CommonTopoComponent],
    declarations: [CommonTopoComponent],
    providers: [],
})
export class CommonTopoModule { }


