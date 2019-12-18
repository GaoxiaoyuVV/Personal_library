import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { IndexComponent } from './index.component';
const indexRouts: Routes = [
    {
        path: 'index',
        component: IndexComponent,
        children: [
            { path: 'd3', loadChildren: () => import('../business/D3/D3.module').then(m => m.D3Module) },
            { path: 'table', loadChildren: () => import('../business/table/table1.module').then(m => m.TableModule) },
            { path: 'dialog', loadChildren: () => import('../business/dialog/table2.module').then(m => m.Table2Module) },
        ]
    }];
@NgModule({
    imports: [
        RouterModule.forRoot(indexRouts, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]

}) export class IndexRoutingModule {

}
