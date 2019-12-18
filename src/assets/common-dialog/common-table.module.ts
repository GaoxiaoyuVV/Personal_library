import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonDialog } from './common-dialog.component';
import { DynamicDialog } from './dynamicDialog.component';
@NgModule({
    imports: [CommonModule],
    exports: [CommonDialog],
    declarations: [CommonDialog, DynamicDialog],
    // all dynamic component
    entryComponents: [DynamicDialog],
})
export class CommonDialogModule { }
