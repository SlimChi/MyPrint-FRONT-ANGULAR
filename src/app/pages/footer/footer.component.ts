import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {TokenService} from "../../services/token-service/token.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  userRole: boolean = false;
  adminRole: boolean = false;
  year: number = new Date().getFullYear();

  constructor() {

  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token !== null) {
      const decodedToken = new JwtHelperService().decodeToken(token);
      this.userRole = decodedToken.authorities[0].authority === 'USER';
      this.adminRole = decodedToken.authorities[0].authority === 'ADMIN';
    }
  }



}
