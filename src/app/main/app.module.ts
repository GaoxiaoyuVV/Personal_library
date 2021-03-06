import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { IndexComponent } from '../index/index.component';
import { LoginModule } from '../login/login.module';
import { IndexModule } from '../index/index.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    IndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
