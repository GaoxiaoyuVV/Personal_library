import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationModule } from './navigation/navigation.module';
@NgModule({
    imports: [
        BrowserModule,
        IndexRoutingModule,
        IndexRoutingModule,
        NavigationModule,
    ],
    declarations: [IndexComponent, HeaderComponent, FooterComponent],
    exports: [IndexComponent]
}) export class IndexModule {

}
