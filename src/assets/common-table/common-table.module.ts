import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonTableComponent } from './common-table.component';
@NgModule({
    imports: [CommonModule],
    declarations: [CommonTableComponent],
    exports: [CommonTableComponent]
})
export class CommonTableModule { }
