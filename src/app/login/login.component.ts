import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public user: any = {
    user: "",
    password: ""
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login() {
    if (this.user.username === "user" && this.user.password === "password") {
      this.router.navigate(['index']);
    }
  }

}
