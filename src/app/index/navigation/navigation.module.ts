import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './navigation.component';
import { MiniNavigationComponent } from './miniNav/miniNavigation.component';
import { NormaliNavigationComponent} from './normalNav/normalNavigation.component';
@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [NavigationComponent, MiniNavigationComponent, NormaliNavigationComponent],
    exports: [NavigationComponent]
}) export class NavigationModule {

}
