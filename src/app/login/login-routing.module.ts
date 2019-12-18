import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
const loginRouts: Routes = [{ path: 'login', component: LoginComponent }];
@NgModule({
    imports: [
        RouterModule.forChild(loginRouts)
    ],
    exports: [RouterModule]

}) export class LoginRoutingModule {

}
