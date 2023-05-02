import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenService} from "../../services/token-service/token.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {

  loggedInUserName: string | undefined = undefined;
  userRole: boolean = false;
  adminRole: boolean = false;

  constructor(
    private tokenService: TokenService,

  ) {   }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = new JwtHelperService().decodeToken(token);
      this.userRole = decodedToken.authorities[0].authority === 'USER';
      this.adminRole = decodedToken.authorities[0].authority === 'ADMIN';
    }
    this.tokenService.getToken();
  }


  isAuthenticated(): boolean {
    return this.tokenService.isLogged();
  }

}
